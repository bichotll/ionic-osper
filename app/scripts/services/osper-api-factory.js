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

    dataFactory.lastLogin = function () {
      return {
        'time': '',
        'msg': '5 minutes ago'
      };
    };

    dataFactory.nextAllowanceInfo = function () {
      return {
        'time': '',
        'msg': '£12 in 4 days time'
      };
    };

    dataFactory.lastMovements = function () {
      return {
        'lastChecked': {
          'time': '',
          'msg': 'about an hour ago'
        },
        'movements': [
          {
            'concept': 'Amazon.co.uk',
            'when': 'About 3 hours ago',
            'movement': -6.50
          },
          {
            'concept': 'Dad deposit',
            'when': 'Yesterday',
            'movement': 10.00
          },
          {
            'concept': 'Sainsburys',
            'when': '27th March',
            'movement': -7.10
          }
        ]
      };
    };

    return dataFactory;
  })
;
