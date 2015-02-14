'use strict';
angular.module('TestOsperIonic')

  .controller('LoginCtrl', function ($scope, $timeout, $state, $ionicHistory, $ionicLoading, $ionicSideMenuDelegate, $ionicModal, osperApiFactory) {

    var redirectDashboard = function(){
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true,
        historyRoot: true
      });

      $ionicSideMenuDelegate.canDragContent(true);

      $state.go('app.dashboard');
    };

    var init = function(){
      $ionicSideMenuDelegate.canDragContent(false);

      if (osperApiFactory.getSessionStatus()){
        redirectDashboard();
      }
    };

    init();

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

        $ionicLoading.hide();

        redirectDashboard();
      }, 1000);
    };
  });
