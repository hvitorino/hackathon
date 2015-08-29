function request(url, data){
	var xmlRequest = new XMLHttpRequest();
	xmlRequest.open("GET", url, false);
	xmlRequest.send(data);
	return xmlRequest.responseText;
}

function request(url, callback){
	var xmlRequest = new XMLHttpRequest();

	xmlRequest.onreadystatechange = function(){
		if(xmlRequest.state == 4 && xmlRequest.status == 200){
			callback(xmlRequest.responseText);
		}
	};

	xmlRequest.open("GET", url, true);
	xmlRequest.send(null);
}

function doTest(){
	var labelDOM = document.getElementById("print");
	var responseText = request("http://hackathongreenmile.herokuapp.com/item", null);
	labelDOM.text(responseText);
}

(function() {
   
})();
