'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('TestOsperIonic', ['ionic', 'googlechart', 'config'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        cache: false,
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.login', {
        url: '/login',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
          }
        }
      })
      .state('app.logout', {
        url: '/logout',
        cache: false,
        views: {
          'menuContent': {
            controller: 'LogoutCtrl'
          }
        }
      })
      .state('app.dashboard', {
        url: '/dashboard',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
          }
        }
      })
      .state('app.cardBalance', {
        url: '/card/balance',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/card-balance.html',
            controller: 'CardBalanceCtrl'
          }
        }
      })
      .state('app.statistics', {
        url: '/statistics',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/statistics.html',
            controller: 'StatisticsCtrl'
          }
        }
      })
      .state('app.objectives', {
        url: '/objectives',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/objectives.html',
            controller: 'ObjectivesCtrl'
          }
        }
      })
      .state('app.objectiveDetails', {
        url: '/objective-details',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/objective-details.html',
            controller: 'ObjectiveDetailsCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
  });

