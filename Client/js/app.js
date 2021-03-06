'use strict';

var workshopApp = angular.module('workshopApp', ['ngRoute', 'ngMaterial', 'workshopControllers']);


workshopApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/workshops-list.html',
      controller: 'WorkshopListController'
    }).
    when('/workshops/view/:workshopId', {
      templateUrl: 'partials/workshops-view.html',
      controller: 'WorkshopViewController'
    }).
    when('/workshops/add/', {
      templateUrl: 'partials/workshops-edit.html',
      controller: 'WorkshopAddController'
    }).
	when('/workshops/edit/:workshopId', {
      templateUrl: 'partials/workshops-edit.html',
      controller: 'WorkshopEditController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);
