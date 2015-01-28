'use strict';
angular.module('TestOsperIonic')

  .controller('LoginCtrl', function ($scope, $timeout, $state, $ionicViewService, $ionicLoading, osperApiFactory) {
    if (osperApiFactory.getSessionStatus()){
      $ionicViewService.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });

      $state.go('app.dashboard');
    }

    $scope.reset = function(form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function (form) {
      if(!form.$valid) {
        return false;
      }

      $ionicLoading.show({
        template: 'Loading...'
      });

      $timeout(function () {
        osperApiFactory.login();

        $ionicViewService.nextViewOptions({
          disableAnimate: false,
          disableBack: true
        });

        $ionicLoading.hide();

        $state.go('app.dashboard');
      }, 1000);
    };
  });
