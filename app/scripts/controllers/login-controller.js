'use strict';
angular.module('TestOsperIonic')

  .controller('LoginCtrl', function ($scope, $timeout, $state, osperApiFactory, $ionicViewService) {
    if (osperApiFactory.getSessionStatus()){
      $ionicViewService.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });

      $state.go('app.home');
    }

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      osperApiFactory.login();

      $ionicViewService.nextViewOptions({
        disableAnimate: false,
        disableBack: true
      });

      $state.go('app.home');
    };
  });
