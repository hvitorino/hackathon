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
        return Hackathon.Helper.htmlToDOM(
            "<tr>\
                <td><span>{name}</span></td>\
                <td><input type='number' value='{amount}' /></td>\
                <td><span>{price}</span></td>\
                <td><input type='checkbox' /></td>\
             </tr>", self);
    };
};