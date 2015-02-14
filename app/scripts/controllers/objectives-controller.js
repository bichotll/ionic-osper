'use strict';
angular.module('TestOsperIonic')

  .controller('ObjectivesCtrl', function ($scope, $ionicLoading, $timeout, $ionicHistory, osperApiFactory) {
    var init = function(){
      $ionicLoading.show();

      $ionicHistory.clearHistory();

      $ionicHistory.nextViewOptions({
        disableAnimate: false,
        disableBack: false
      });

      /*
       temp timeout load info
       every call should return a promise
       n then I should hide the loading once
       I have all them loaded
       */
      $timeout(function () {
        $scope.objectives = osperApiFactory.getObjectives();
        $ionicLoading.hide();
      }, 1000);
    };
    init();
  });
