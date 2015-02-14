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

    /**
     * Login and emit login
     */
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

    dataFactory.getObjective = function(){
      return {
        id: '1',
        name: 'Bike',
        miniDescription: 'I wanna ride on wheels',
        balance: 125,
        objective: 350,
        allowance: {
          howOften: 'monthly',
          howMuch: 5
        }
      };
    };

    dataFactory.getObjectives = function(){
      return [
        {
          id: '1',
          name: 'Bike',
          miniDescription: 'I wanna ride on wheels',
          balance: 125,
          objective: 350,
          allowance: {
            howOften: 'monthly',
            howMuch: 5
          }
        },
        {
          id: '2',
          name: 'Phone',
          miniDescription: 'I\'ll not make prank calls, I promise',
          balance: 23.75,
          objective: 250,
          allowance: {
            howOften: 'monthly',
            howMuch: 10
          }
        }
      ];
    };

    return dataFactory;
  })
;
