'use strict';

/**
 * @ngdoc service
 * @name TestOsperIonic.osperApiFactory
 * @description
 * # eventFactory
 * Api in the TestOsperIonic.
 */
angular.module('TestOsperIonic')
  .factory('osperApiFactory', function ($rootScope) {
    var dataFactory = {};

    var sessionStatus = false;

    dataFactory.getSessionStatus = function () {
      return sessionStatus;
    };

    dataFactory.login = function () {
      sessionStatus = true;
      $rootScope.$emit('login', dataFactory.getUserData());
    };

    dataFactory.logout = function () {
      sessionStatus = false;
    };

    dataFactory.getUserData = function () {
      return {
        'name': 'Samy',
        'balance': 21.43,
        'allowance': 'On',
        'card': {
          'status': 'Unlocked'
        }
      };
    };

    return dataFactory;
  });
