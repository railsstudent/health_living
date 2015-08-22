'use strict';

/**
 * @ngdoc overview
 * @name hlApp
 * @description
 * # hlApp
 *
 * Main module of the application.
 */
angular
  .module('hlApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

      //
      // Now set up the states
      $stateProvider
        .state('main', {
          url: "/main",
          templateUrl: "views/main.html",
          controller : 'MainCtrl'
        })
        .state('articles', {
          url: "/articles",
          templateUrl: "views/articles.html",
          controller: 'ArticlesCtrl'
        })
        .state('gallery', {
          url: "/gallery",
          templateUrl: "views/gallery.html",
          controller: 'GalleryCtrl'
        })
        .state('subscribers', {
          url: "/subscribes",
          templateUrl: "views/subscribers.html",
          controller: 'SubscribersCtrl',
          controllerAs: 'subscribers'
        });

      $urlRouterProvider.otherwise('main');
  });
