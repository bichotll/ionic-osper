'use strict';
angular.module('TestOsperIonic')

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state, $rootScope, osperApiFactory, $ionicViewService) {
    if (!osperApiFactory.getSessionStatus()) {
      $ionicViewService.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      $state.transitionTo('app.login');
    }

    $rootScope.$on('login', function (event, data) {
      $scope.user = data;
    });
  });
