/**
 * Created by Hamon on 30/08/2015.
 */

Hackathon.View = function(props) {
    var self = this;
    self.menu = props.menu;
    self.order = props.order;
    self.account = props.account;

    self.render = function() {
        return self.menu.render();
    }
};