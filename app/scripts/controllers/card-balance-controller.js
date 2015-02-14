'use strict';
angular.module('TestOsperIonic')

  .controller('CardBalanceCtrl', function ($scope, $ionicLoading, $timeout, $ionicHistory, osperApiFactory) {
    var init = function () {
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

      $scope.chartObject = {
        "type": "AreaChart",
        "displayed": true,
        "data": {
          "cols": [
            {
              "id": "month",
              "label": "Month",
              "type": "string",
              "p": {}
            },
            {
              "id": "balance-id",
              "label": "Balance",
              "type": "number",
              "p": {}
            },
            {
              "id": "bike-objective-id",
              "label": "Bike objective",
              "type": "number",
              "p": {}
            },
            {
              "id": "phone-objective-id",
              "label": "Phone objective",
              "type": "number",
              "p": {}
            }
          ],
          "rows": [
            {
              "c": [
                {
                  "v": "1st week"
                },
                {
                  "v": 40.15
                },
                {
                  "v": 10
                },
                {
                  "v": 5
                }
              ]
            },
            {
              "c": [
                {
                  "v": "2nd week"
                },
                {
                  "v": 10.20
                },
                {
                  "v": 15
                },
                {
                  "v": 7
                }
              ]
            },
            {
              "c": [
                {
                  "v": "3rd week"
                },
                {
                  "v": 5.60
                },
                {
                  "v": 20
                },
                {
                  "v": 14
                }
              ]
            },
            {
              "c": [
                {
                  "v": "4th week"
                },
                {
                  "v": 8.50
                },
                {
                  "v": 25
                },
                {
                  "v": 16
                }
              ]
            }
          ]
        },
        "options": {
          "title": "last 4 weeks balance",
          "fill": 20,
          "displayExactValues": true,
          "vAxis": {
          },
          "hAxis": {
            "title": "Date"
          }
        },
        "formatters": {}
      }
    }
    init();
  });
