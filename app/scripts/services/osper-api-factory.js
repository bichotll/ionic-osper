'use strict';

/**
 * @ngdoc service
 * @name TestOsperIonic.osperApiFactory
 * @description
 * # eventFactory
 * Api in the TestOsperIonic.
 */
angular.module('TestOsperIonic')
  .factory('osperApiFactory', function () {
    var dataFactory = {};

    var sessionStatus = false;

    dataFactory.getSessionStatus = function () {
      return sessionStatus;
    };

    dataFactory.login = function () {
      sessionStatus = true;
    };

    dataFactory.logout = function () {
      sessionStatus = false;
    };

    return dataFactory;
  });
