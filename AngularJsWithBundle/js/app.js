/// <reference path="../Scripts/_references.js" />
var bundleapp = angular.module("bundleapp", []);

bundleapp.factory("MyService", function () {
    return {
        message : "Welcome!"
    };
});

bundleapp.controller("AngularCtrl", ["$scope", "MyService", function ($scope, MyService) {
    $scope.message = MyService.message + " from AngularCtrl";
}]);

function MyCtrl($scope, MyService) {
    $scope.message = MyService.message + " from MyCtrl";
};

MyCtrl.$inject = ["$scope", "MyService"];
