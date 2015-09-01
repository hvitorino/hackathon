/**
 * Created by Hamon on 30/08/2015.
 */

Hackathon.View = function(props) {
    var self = this;
    self.menu = props.menu;
    self.order = props.order;
    self.account = props.account;

    self.render = function() {
        var div = document.createElement("div");

        var order = self.order.render();
        var menu = self.menu.render();
        var account = self.account.render();

        div.appendChild(order);
        div.appendChild(menu);
        div.appendChild(account);

        return div;
    }
};