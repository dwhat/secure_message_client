var app = angular.module("securemessageclient");

app.controller("NachrichtenEditController", function ($scope, $http, $location, $routeParams){

  $scope.message = {};

  var id = $routeParams.id;

  $http.get("http://.." + id).success(function(response) {
    $scope.message = response;
  })

  $scope.saveMessage = function (){
    $http.put("http://../" + $scope.message._id, $scope.message)
    .success(function(response){
      $location.url("/messages")
    });
  }

});
