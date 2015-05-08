'use strict';

angular.module('warhammer40k')
  .controller('RuleDetailsCtrl', function ($scope, $http, $routeParams) {
    $scope.rule = null;

    var id = $routeParams.id;

    $http.get('/rule/rest/' + id).success(
      function(data) {
        $scope.rule = data;
      }
    );
  });
