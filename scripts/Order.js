/**
 * Created by Hamon on 30/08/2015.
 */

Hackathon.Components.Order = function() {
    var self = this;
    self.items = [];

    self.render = function () {
        var section = self.renderSection();
        var header = self.renderHeader();
        var article = self.renderArticle();
        var table = self.renderTable();

        section.appendChild(header);
        section.appendChild(article);
        article.appendChild(table);

        self.items.forEach(function (item) {
            var menuItem = new Hackathon.Components.OrderItem(item);
            table.appendChild(menuItem.render());
        });

        return section;
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

        var thIncluir = document.createElement('th');
        thIncluir.appendChild(document.createTextNode("Incluir"));
        thead.appendChild(thIncluir);

        table.appendChild(thead);

        return table;
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

        var elTdInclude = document.createElement("td");
        elTdInclude.className = "center";
        var elIncludeCheck = document.createElement("input");
        elIncludeCheck.type = "checkbox";
        elTdInclude.appendChild(elIncludeCheck);
        elTr.appendChild(elTdInclude);

        return elTr;
    };
};