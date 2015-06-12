var app = angular.module("securemessageclient");

app.controller("UserGetController", function ($scope, $http){

  var id = $routeParams.id;
  
  $http.get("https://webengproject.herokuapp.com/" + id).success(funciton(response){
    $scope.user = response;
  }).error(function(err){
    $scope.error = err;
  });


});
