Hackathon = {
    Models: {},
    Requests: {}
};

Hackathon.Requests.getItems = function(success) {
    var xmlRequest = new XMLHttpRequest();

    xmlRequest.onreadystatechange = function(){
        if(xmlRequest.readyState == 4) {
            if(xmlRequest.status == 200) {
                success(JSON.parse(xmlRequest.responseText));
            } else {
                alert(xmlRequest.responseText);
            }
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

    xmlRequest.open("POST", "http://hackathongreenmile.herokuapp.com/order", true);
    xmlRequest.send(null);
};

Hackathon.init = function(){
    Hackathon.Requests.getItems(function(items){
        var elMenu = document.getElementById("menuData");

        var view = new Hackathon.View({
            menu: new Hackathon.Models.Menu({ items: items }),
            order: new Hackathon.Models.Order(),
            account: new Hackathon.Models.Account()
        });

        items.forEach(function(item) {
            var menuItem = new Hackathon.Models.MenuItem(item);
            elMenu.appendChild(menuItem.render());
        });
    });
};
