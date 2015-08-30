/**
 * Created by Hamon on 30/08/2015.
 */

Hackathon.Models.Order = function(props) {
    var self = this;
    self.orderedItems = props.orderedItems;
};

Hackathon.Models.OrderItem = function(props) {
    var self = this;
    self.id = props.idItem || -1;
    self.quantity = props.quantity || 0;
};