'use strict';
angular.module('TestOsperIonic')

  .controller('CardBalanceCtrl', function ($scope, $ionicLoading, $timeout, $ionicHistory, osperApiFactory) {
    var init = function(){
      $ionicLoading.show();

      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });

      /*
       temp timeout load info
       every call should return a promise
       n then I should hide the loading once
       I have all them loaded
       */
      $timeout(function () {
        $scope.user = osperApiFactory.getUserData();
        $scope.lastMovements = osperApiFactory.lastMovements();
        $ionicLoading.hide();
      }, 1000);
    }
    init();
  });
