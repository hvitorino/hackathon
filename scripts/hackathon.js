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
};

Hackathon.Requests.getItems = function(success, error) {
    var xmlRequest = new XMLHttpRequest();

    xmlRequest.onreadystatechange = function(){
        if(xmlRequest.state == 4 && xmlRequest.status == 200){
            success(xmlRequest.responseText);
        } else {
            error(xmlRequest.responseText);
        }
    };

    xmlRequest.open("GET", "http://hackathongreenmile.herokuapp.com/item", true);
    xmlRequest.send(null);
};

Hackathon.Requests.orderItems = function(order) {
    var xmlRequest = new XMLHttpRequest();

    xmlRequest.onreadystatechange = function(){
        if(xmlRequest.state == 4 && xmlRequest.status == 200){
            success(xmlRequest.responseText);
        } else {
            error(xmlRequest.responseText);
        }
    };

    xmlRequest.open("POST", "http://hackathongreenmile.herokuapp.com/item", true);
    xmlRequest.send(null);
};