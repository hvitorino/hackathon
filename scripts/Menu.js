/**
 * Created by Hamon on 30/08/2015.
 */

Hackathon.Components.Menu = function (props) {
    var self = this;
    self.items = props.items;

    self.render = function() {
        var section = Hackathon.Helper.htmlToDOM("<section class='open'></section>");

        var header = Hackathon.Helper.htmlToDOM(
                        "<header>\
                            <a href='' class='button back'>Voltar</a>\
                            <a href='' onclick='sendOrder();' class='button foward'>Avancar</a>\
                            <h1>Cardapio</h1>\
                        </header>");

        var article = Hackathon.Helper.htmlToDOM("<article></article>");

        var table = Hackathon.Helper.htmlToDOM(
            "<table>\
                <thead>\
                    <th>Nome</th>\
                    <th>Quantidade</th>\
                    <th>Preço</th>\
                    <th>Incluir</th>\
                </thead>\
             </table>");

        section.appendChild(header);
        section.appendChild(article);
        article.appendChild(table);

        self.items.forEach(function(item) {
            var menuItem = new Hackathon.Components.MenuItem(item);
            table.appendChild(menuItem.render());
        });

        return section;
    };
};

Hackathon.Components.MenuItem = function(props) {
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
        var elInputAmount = document.createElement("input");
        elInputAmount.type = "number";
        elInputAmount.value = self.amount;
        elTdAmount.appendChild(elInputAmount);
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