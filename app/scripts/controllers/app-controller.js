'use strict';
angular.module('TestOsperIonic')

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state, osperApiFactory, $ionicViewService) {
    if (!osperApiFactory.getSessionStatus()){
      $ionicViewService.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      $state.transitionTo('app.login');
    }
  });
