var app = angular.module("securemessageclient");

app.controller("UsersCreateController", function ($scope, $http, $location){

  $scope.user = {};

  $scope.createUser = function (){
    $http.post("https://webengproject.herokuapp.com", $scope.user)
      .success(function(response) {
        $location.url("/users");
      });
  }
});
