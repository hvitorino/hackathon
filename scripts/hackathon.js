Hackathon = {
    Components: {},
    Requests: {},
    Helper: {}
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
        var view = new Hackathon.View({
            menu: new Hackathon.Components.Menu({ items: items }),
            order: new Hackathon.Components.Order(),
            account: new Hackathon.Components.Account()
        });

        var container = document.getElementById("container");
        container.appendChild(view.render());
    });
};


/*Hackathon.Helper.htmlToDOM = function(htmlString, obj) {
    var container = document.createElement("div");

    if(obj) {
        container.innerHTML = Hackathon.Helper.renderTemplateString(htmlString, obj);
    } else {
        container.innerHTML = htmlString;
    }

    return container.childNodes[0];
}*/

Hackathon.Helper.htmlToDOM = function(htmlString, obj) {
    var parser = new HTMLParser();

    if(obj) {
        return parser.parseFromString(Hackathon.Helper.renderTemplateString(htmlString, obj), "text/xml");
    }

    return parser.parseFromString(htmlString, "text/xml");
}

Hackathon.Helper.renderTemplateString = function(htmlString, obj) {
    return htmlString.replace(/{([^{}]*)}/g,
        function (a, b) {
            var r = obj[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
}