'use strict';
angular.module('TestOsperIonic')
.directive('navClear', [
  '$ionicHistory',
  '$window',
  '$rootScope',
  function($ionicHistory, $window, $rootScope) {
    $rootScope.$on('$stateChangeError', function() {
      $ionicHistory.nextViewOptions(null);
    });
    return {
      priority: 100,
      restrict: 'AC',
      compile: function($element) {
        return { pre: prelink };
        function prelink($scope, $element, $attrs) {
          var unregisterListener;
          function listenForStateChange() {
            unregisterListener = $scope.$on('$stateChangeStart', function() {
              $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
              });
              unregisterListener();
            });
            $window.setTimeout(unregisterListener, 300);
          }

          $element.on('click', listenForStateChange);
        }
      }
    };
  }]);
