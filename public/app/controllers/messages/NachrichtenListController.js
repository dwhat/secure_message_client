var app = angular.module("securemessageclient");

app.controller("NachrichtenListController", function ($scope, $http){
  $scope.message = "Hallo Angular";


  $http.get("https://webengproject.herokuapp.com").success(funciton(response){
    $scope.messages = response;
  }).error(function(err){
    $scope.error = err;
  });


});
