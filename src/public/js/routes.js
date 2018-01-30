var app = angular.module("couchdb-app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/list-dbs", {
            templateUrl: "/pages/list-dbs",
            controller: "listDBController"
        })
        .when("/list-docs", {
            templateUrl: "/pages/list-docs",
            // controller: "listDocController"
        })
        .when("/create-db", {
            templateUrl: "/pages/create-db",
            // controller: "createDBController"
        })
        .when("/add-doc", {
            templateUrl: "/pages/add-doc",
            // controller: "addDocController"
        })
});

app.controller('listDBController', function ($scope, $rootScope) {
    $rootScope.name = "test name";
    console.log($rootScope.name);
});