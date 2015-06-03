var app = angular.module("securemessageclient", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
    .when("/messages", {
      templateUrl: "/app/templates/messages/list.html",
      controller: "NachrichtenListController"
    })
    .when("/messages/new", {
      templateUrl: "/app/templates/messages/create.html",
      controller: "NachrichtenCreateController"
    })
    .when("/messages/:id/edit", {
      templateUrl: "/app/templates/messages/edit.html",
      controller: "NachrichtenEditController"
    })
    .otherwise({redirectTo: '/messages'});
});
