/**
 * Created by Hamon on 04/09/2015.
 */
var hackathon = angular.module("hackathon", []);

hackathon.controller("ContaController", function ($scope){
    $scope.items = [
        { name: "Coxinha", amount: 1, price: 3.0 },
        { name: "Risoli", amount: 2, price: 2.0 },
        { name: "Empada", amount: 3, price: 3.5 },
        { name: "Pastel", amount: 1, price: 5.0 },
        { name: "Croissaint", amount: 4, price: 7.0 }
    ];
});