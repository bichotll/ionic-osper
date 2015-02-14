/**
 * @ngdoc filter
 * @name TestOsperIonic.customNegativeCurrency
 * @description
 * Returns {currencySymbol}-{amount} if negative from $filter('currency') returned value
 */
angular.module('TestOsperIonic').
  filter('customNegativeCurrency', ["$filter", function ($filter) {
  return function(amount, currencySymbol){
    var currency = $filter('currency');

    if(amount < 0){
      return currency(amount, currencySymbol).replace(currencySymbol, currencySymbol + "-").replace("(", "").replace(")", "");
    }

    return currency(amount, currencySymbol);
  };
}]);
