'use strict';
angular.module('warhammer40k', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/rule', {
        templateUrl: 'app/main/main.html',
        controller: 'MainRuleCtrl'
      })
      .when('/rule/:id', {
        templateUrl : 'app/rule/ruleDetails.html',
        controller:'RuleDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/rule'
      });
  })
;

angular.module('warhammer40k')
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('grey')
    ;
  })
;
