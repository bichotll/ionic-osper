'use strict';
angular.module('TestOsperIonic')

  .controller('DashboardCtrl', function ($scope, $ionicLoading, $timeout, osperApiFactory) {
    $ionicLoading.show();

    /*
     temp timeout load info
     every call should return a promise
     n then I should hide the loading once
     I have all them loaded
     */
    $timeout(function () {
      $scope.user = osperApiFactory.getUserData();
      $scope.lastLogin = osperApiFactory.lastLogin();
      $scope.nextAllowanceInfo = osperApiFactory.nextAllowanceInfo();
      $ionicLoading.hide();
    }, 1000);
  });
