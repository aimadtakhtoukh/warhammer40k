'use strict';

angular.module('warhammer40k')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.showRules = function() {
      $location.path('/rule/');
    };
  });
