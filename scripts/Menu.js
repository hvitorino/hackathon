/**
 * Created by Hamon on 30/08/2015.
 */

Hackathon.Components.Menu = function (props) {
    var self = this;
    self.items = props.items;

    self.render = function () {
        var section = self.renderSection();
        var header = self.renderHeader();
        var article = self.renderArticle();
        var table = self.renderTable();

        section.appendChild(header);
        section.appendChild(article);
        article.appendChild(table);

        self.items.forEach(function (item) {
            var menuItem = new Hackathon.Components.MenuItem(item);
            table.appendChild(menuItem.render());
        });

        return section;
    };

    self.renderSection = function renderSection() {
        var section = document.createElement('section');
        section.className = "open";
        return section;
    };

    self.renderHeader = function () {
        var header = document.createElement('header');

        var aVoltar = document.createElement('a');
        aVoltar.href = "";
        aVoltar.className = "button back";
        aVoltar.appendChild(document.createTextNode("Voltar"));
        header.appendChild(aVoltar);

        var aAvancar = document.createElement('a');
        aAvancar.href = "";
        aAvancar.className = "button foward";
        aAvancar.onclick = function () {
            sendOrder()
        };

        aAvancar.appendChild(document.createTextNode("Avancar"));
        header.appendChild(aAvancar);

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
};

Hackathon.Components.MenuItem = function (props) {
    var self = this;
    self.id = props.id || -1;
    self.name = props.name || "";
    self.price = props.price || 0;
    self.amount = props.amount || 0;

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
        tdInclude.appendChild(inputInclude);

        tr.appendChild(tdInclude);

        return tr;
    };
};