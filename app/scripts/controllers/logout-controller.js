'use strict';
angular.module('TestOsperIonic')

  .controller('LogoutCtrl', function ($scope, $timeout, $state, osperApiFactory, $ionicViewService) {

      osperApiFactory.logout();

      $ionicViewService.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });

      $state.go('app.login');

  });
