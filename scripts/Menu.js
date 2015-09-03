/**
 * Created by Hamon on 30/08/2015.
 */

Hackathon.Components.Menu = function (props) {
    var self = this;
    self.items = props.items;
    self.selectedItems = [];

    self.onConfirm = props.onConfirm || function () {};
    self.selectedItemsDom = [];

    self.order = null;
    self.section = null;

    self.clearSelection = function () {
        self.selectedItemsDom.forEach(function (checkbox){
            checkbox.checked = false;
        });

        self.selectedItems = [];
        self.selectedItemsDom = [];
    };

    self.goToOrder = function () {
        self.hide();
        self.order.show();
    };

    self.show = function () {
        self.clearSelection();
        self.section.className = "open";
    };

    self.hide = function () {
        self.section.className = "";
    };

    self.setOrder = function(order) {
        self.order = order;
    };

    self.addSelectedItem = function(item, itemCheckbox) {
        self.selectedItems.push(item);
        self.selectedItemsDom.push(itemCheckbox);
    };

    self.removeUnselectedItem = function (deselectedItem, deselectedItemCheckbox) {
        self.selectedItems = self.selectedItems.filter(function (item) {
            return item.id !== deselectedItem.id;
        });

        self.selectedItemsDom = self.selectedItems.filter(function (item) {
            return item !== deselectedItemCheckbox;
        });
    };

    self.getSelectedItems = function () {
        return self.selectedItems;
    };

    self.render = function () {
        self.section = self.renderSection();

        var header = self.renderHeader();
        var article = self.renderArticle();
        var table = self.renderTable();
        var footer = self.renderFooter();

        self.section.appendChild(header);
        self.section.appendChild(article);
        article.appendChild(table);
        self.section.appendChild(footer);

        self.items.forEach(function (item) {
            var menuItem = new Hackathon.Components.MenuItem(item);
            menuItem.onSelect = self.addSelectedItem;
            menuItem.onDeselect = self.removeUnselectedItem;
            table.appendChild(menuItem.render());
        });

        return self.section;
    };

    self.renderSection = function renderSection() {
        var section = document.createElement('section');
        return section;
    };

    self.renderHeader = function () {
        var header = document.createElement('header');

        var aVoltar = document.createElement('a');
        aVoltar.href = "";
        aVoltar.className = "button back";
        aVoltar.appendChild(document.createTextNode("Voltar"));
        aVoltar.onclick = function () {
            self.goToOrder();

            return false;
        };
        header.appendChild(aVoltar);

        var h1Titulo = document.createElement('h1');
        h1Titulo.appendChild(document.createTextNode("Cardapio"));
        header.appendChild(h1Titulo);

        return header;
    };

    self.renderArticle = function () {
        var article = document.createElement("article");
        return article;
    };

    self.renderTable = function () {
        var table = document.createElement('table');

        var thead = document.createElement('thead');

        var thNome = document.createElement('th');
        thNome.appendChild(document.createTextNode("Nome"));
        thead.appendChild(thNome);

        var thQuantidade = document.createElement('th');
        thQuantidade.appendChild(document.createTextNode("Quantidade"));
        thead.appendChild(thQuantidade);

        var thPreco = document.createElement('th');
        thPreco.appendChild(document.createTextNode("Preço"));
        thead.appendChild(thPreco);

        var thIncluir = document.createElement('th');
        thIncluir.appendChild(document.createTextNode("Incluir"));
        thead.appendChild(thIncluir);

        table.appendChild(thead);

        return table;
    };

    self.renderFooter = function () {
        var footer = document.createElement("footer");
        var confirmButton = self.renderConfirmButton();

        footer.appendChild(confirmButton);

        return footer;
    };

    self.renderConfirmButton = function () {
        var aConfirm = document.createElement('a');
        aConfirm.appendChild(document.createTextNode("Confirma"));
        aConfirm.href = "";
        aConfirm.className = "button forward";
        aConfirm.onclick = function () {
            self.onConfirm();
            self.goToOrder();

            return false;
        };

        return aConfirm;
    };
};

Hackathon.Components.MenuItem = function (props) {
    var self = this;
    self.id = props.id || -1;
    self.name = props.name || "";
    self.price = props.price || 0;
    self.amount = props.amount || 0;

    self.onSelect = props.onSelect || function () {};
    self.onDeselect = props.onDeselect || function () {};

    self.render = function () {
        var tr = document.createElement('tr');

        var tdName = document.createElement('td');
        var spanName = document.createElement('span');
        spanName.appendChild(document.createTextNode(self.name));
        tdName.appendChild(spanName);

        tr.appendChild(tdName);

        var tdAmount = document.createElement('td');

        var inputAmount = document.createElement('input');
        inputAmount.type = "number";
        inputAmount.value = self.amount;
        tdAmount.appendChild(inputAmount);

        tr.appendChild(tdAmount);

        var tdPrice = document.createElement('td');

        var spanPrice = document.createElement('span');
        spanPrice.appendChild(document.createTextNode(self.price));
        tdPrice.appendChild(spanPrice);

        tr.appendChild(tdPrice);

        var tdInclude = document.createElement('td');

        var inputInclude = document.createElement('input');
        inputInclude.type = "checkbox";
        inputInclude.onclick = function () {
            if(inputInclude.checked) {
                self.onSelect(self, inputInclude);
            } else {
                self.onDeselect(self, inputInclude);
            }
        };
        tdInclude.appendChild(inputInclude);

        tr.appendChild(tdInclude);

        return tr;
    };
};