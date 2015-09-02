/**
 * Created by Hamon on 30/08/2015.
 */

Hackathon.Components.Order = function() {
    var self = this;
    self.items = [];
    self.section = null;

    self.menu = null;
    self.account = null;

    self.goToMenu = function () {
        self.hide();
        self.menu.show();
    };

    self.closeAccount = function () {
        self.hide();
        self.account.show();
    };

    self.show = function () {
        self.section.className = "open";
    };

    self.hide = function () {
        self.section.className = "";
    };

    self.setMenu = function (menu) {
        self.menu = menu;
    };

    self.setAccount = function (account) {
        self.account = account;
    };

    self.render = function () {
        self.section = self.renderSection();

        var header = self.renderHeader();
        var article = self.renderArticle();
        var table = self.renderTable();
        var footer = self.renderFooter();

        self.section.appendChild(header);
        self.section.appendChild(article);
        self.section.appendChild(footer);
        article.appendChild(table);

        self.items.forEach(function (item) {
            var menuItem = new Hackathon.Components.OrderItem(item);
            table.appendChild(menuItem.render());
        });

        return self.section;
    };

    self.renderSection = function renderSection() {
        var section = document.createElement('section');
        section.className = "open";
        return section;
    };

    self.renderHeader = function () {
        var header = document.createElement('header');

        var aMenu = self.renderMenuButton();
        header.appendChild(aMenu);

        var h1Titulo = document.createElement('h1');
        h1Titulo.appendChild(document.createTextNode("Pedido"));
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

        table.appendChild(thead);

        return table;
    };

    self.renderFooter = function () {
        var footer = document.createElement("footer");
        var closeAccountButton = self.renderCloseAccountButton();

        footer.appendChild(closeAccountButton);

        return footer;
    };

    self.renderMenuButton = function() {
        var aMenu = document.createElement('a');
        aMenu.appendChild(document.createTextNode("Cardápio"));
        aMenu.href = "";
        aMenu.className = "button forward";
        aMenu.onclick = function () {
            self.goToMenu();

            return false;
        };

        return aMenu;
    }

    self.renderCloseAccountButton = function() {
        var aMenu = document.createElement('a');
        aMenu.appendChild(document.createTextNode("Fechar a conta"));
        aMenu.href = "";
        aMenu.className = "button forward";
        aMenu.onclick = function () {
            return false;
        };

        return aMenu;
    };
};

Hackathon.Components.OrderItem = function(props) {
    var self = this;
    self.id = props.id || -1;
    self.name = props.name || "";
    self.price = props.price || 0;
    self.amount = props.amount || 0;

    self.render = function() {
        var elTr = document.createElement("tr");

        var elTdName = document.createElement("td");
        var elSpanName = document.createElement("span");
        elSpanName.innerText = self.name;
        elTdName.appendChild(elSpanName);
        elTr.appendChild(elTdName);

        var elTdAmount = document.createElement("td");
        var elSpanAmount = document.createElement("span");
        elSpanAmount.innerText = self.amount;
        elTdAmount.appendChild(elSpanAmount);
        elTr.appendChild(elTdAmount);

        var elTdPrice = document.createElement("td");
        var elSpanPrice = document.createElement("span");
        elSpanPrice.innerText = self.price;
        elTdPrice.appendChild(elSpanPrice);
        elTr.appendChild(elTdPrice);

        return elTr;
    };
};