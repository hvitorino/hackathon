/**
 * Created by Hamon on 04/09/2015.
 */

hackathon.controller("CardapioController", function ($scope){
    $scope.items = [
        { name: "Coxinha", amount: 0, price: 3.0, selected: false },
        { name: "Risoli", amount: 0, price: 2.0, selected: false },
        { name: "Empada", amount: 0, price: 3.5, selected: false },
        { name: "Pastel", amount: 0, price: 5.0, selected: false },
        { name: "Croissaint", amount: 0, price: 7.0, selected: false }
    ];
});