var app = angular.module("securemessageclient");

app.controller("NachrichtenCreateController", function ($scope, $http, $location){

  $scope.message = {};

  $scope.createMessage = function (){
    $http.post("https://webengproject.herokuapp.com", $scope.message)
      .success(function(response) {
        $location.url("/messages");
      });
  }
});
