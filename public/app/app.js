var app = angular.module("securemessageclient", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
    .when("/users", {
      templateUrl: "/app/templates/users/list.html",
      controller: "UsersListController"
    })
    .when("/users/new", {
      templateUrl: "/app/templates/users/create.html",
      controller: "UsersCreateController"
    })
    .when("/users/:id/", {
      templateUrl: "/app/templates/users/show.html",
      controller: "UserGetController"
    })
    .when("/users/:id/pubkey", {
      templateUrl: "/app/templates/users/pubkey.html",
      controller: "UserGetPubkeyController"
    })
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
