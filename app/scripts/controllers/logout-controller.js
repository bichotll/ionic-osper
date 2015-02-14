'use strict';
angular.module('TestOsperIonic')

  .controller('LogoutCtrl', function ($scope, $timeout, $state, osperApiFactory, $ionicHistory) {

      osperApiFactory.logout();

      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });

      $state.go('app.login');

  });
