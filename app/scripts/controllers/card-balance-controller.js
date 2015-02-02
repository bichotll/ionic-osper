'use strict';
angular.module('TestOsperIonic')

  .controller('CardBalanceCtrl', function ($scope, $ionicLoading, $timeout, osperApiFactory) {
    $ionicLoading.show();

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
  });
