/**
 * Created by Hamon on 30/08/2015.
 */

Hackathon.View = function(props) {
    var self = this;
    self.account = new Hackathon.Components.Account();

    self.order = new Hackathon.Components.Order({
        onCloseAccount: function () {
            var orderedItems = self.order.getOrderedItems();
            orderedItems.forEach(self.account.addItem);
        }
    });

    self.menu = new Hackathon.Components.Menu({
        items: props.menuItems,

        onConfirm: function () {
            var selectedItems = self.menu.getSelectedItems();
            selectedItems.forEach(self.order.addItem);
        }
    });

    self.order.setMenu(self.menu);
    self.order.setAccount(self.account);
    self.menu.setOrder(self.order);
    self.account.setOrder(self.order);

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