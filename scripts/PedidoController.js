/**
 * Created by Hamon on 04/09/2015.
 */
hackathon.controller("PedidoController", function ($scope){
    $scope.items = [
        { name: "Coxinha", amount: 1, price: 3.0 },
        { name: "Risoli", amount: 1, price: 2.0 },
        { name: "Empada", amount: 1, price: 3.5 },
        { name: "Pastel", amount: 1, price: 5.0 },
        { name: "Croissaint", amount: 1, price: 7.0 }
    ];
});