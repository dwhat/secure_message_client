var app = angular.module("securemessageclient");

app.controller("NachrichtenCreateController", function ($scope, $http, $location){

  $scope.message = {};

  $scope.createFahrt = function (){
    $http.post("http://...", $scope.message)
      .success(function(response) {
        $location.url("/fahrten");
      });
  }
});
