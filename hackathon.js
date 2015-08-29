var Hackathon = {
	Models: {}
};

Hackathon.Models.Item = function(props) {
    var self = this;
    self.id = props.id || -1;
    self.name = props.name || "";
	self.price = props.price || 0;
};

Hackathon.Models.ItemOrder = function(props) {
    var self = this;
    self.id = props.idItem || -1;
    self.quantity = props.quantity || 0;
};

Hackathon.Model.Order = function(props) {
    var self = this;
    self.orderedItems = props.orderedItems;

    self.getTotal = function() {
    	
    };
};