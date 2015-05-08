'use strict';

angular.module('warhammer40k')
  .controller('MainRuleCtrl', function ($scope, $http, $location) {
    $scope.rules = [];

    $http.get('/rule/rest/all').success(
      function(data) {
        $scope.rules = data;
      }
    );

    $scope.showRule = function(id) {
      $location.path('/rule/' + id);
    }
  });
