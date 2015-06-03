var app = angular.module("securemessageclient", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
    .when("/nachrichten", {
      templateUrl: "/app/templates/nachrichten/list.html",
      controller: "NachrichtenListController"
    })
    .otherwise({redirectTo: '/nachrichten'});
});
