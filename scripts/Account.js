/**
 * Created by Hamon on 30/08/2015.
 */

Hackathon.Components.Account = function(props) {
    var self = this;
    self.items = [];
    self.table = null;

    self.order = null;

    self.addItem = function (item) {
        var accountItem = new Hackathon.Components.AccountItem(item);
        self.items.push(accountItem);
        self.table.appendChild(accountItem.render());
    };

    self.show = function () {
        self.section.className = "open";
    };

    self.hide = function () {
        self.section.className = "";
    };

    self.setOrder = function (order) {
        self.order = order;
    };

    self.render = function () {
        self.section = self.renderSection();

        var header = self.renderHeader();
        var article = self.renderArticle();
        self.table = self.renderTable();

        self.section.appendChild(header);
        self.section.appendChild(article);
        article.appendChild(self.table);

        self.items.forEach(function (item) {
            var menuItem = new Hackathon.Components.OrderItem(item);
            self.table.appendChild(menuItem.render());
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
        header.appendChild(aVoltar);

        var aAvancar = document.createElement('a');
        aAvancar.href = "";
        aAvancar.className = "button foward";

        aAvancar.appendChild(document.createTextNode("Avancar"));
        header.appendChild(aAvancar);

        var h1Titulo = document.createElement('h1');
        h1Titulo.appendChild(document.createTextNode("Conta"));
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
};

Hackathon.Components.AccountItem = function(props) {
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