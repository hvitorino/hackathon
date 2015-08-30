/**
 * Created by Hamon on 30/08/2015.
 */

Hackathon.Models.Order = function(props) {
    var self = this;
    self.items = props.items;

    self.render = function() {
        var elTable = document.createElement("table");

        var elHead = document.createElement("thead");
        elTable.appendChild(elHead);

        var elThItem = document.createElement("th");
        elThItem.innerText = "Nome";
        elHead.appendChild(elThItem);

        var elThQuantidade = document.createElement("th");
        elThQuantidade.innerText = "Quantidade";
        elHead.appendChild(elThQuantidade);

        var elThPreco = document.createElement("th");
        elThPreco.innerText = "Preço";
        elHead.appendChild(elThPreco);

        var elThIncluir = document.createElement("th");
        elThIncluir.innerText = "Incluir";
        elHead.appendChild(elThIncluir);

        self.items.forEach(function(item) {
            var menuItem = new Hackathon.Models.MenuItem(item);
            elTable.appendChild(menuItem.render());
        });

        return elTable;
    };
};

Hackathon.Models.OrderItem = function(props) {
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