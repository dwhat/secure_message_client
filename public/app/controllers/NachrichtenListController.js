var app = angular.module("securemessageclient");

app.controller("NachrichtenListController", function ($scope, $http){
  $scope.message = "Hallo Angular";

/*
  $http.get("http://...").success(funciton(response){
    $scope.users = response;
  }).error(function(err){
    $scope.error = err;
  });
*/

});
