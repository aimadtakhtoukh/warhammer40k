'use strict';

angular.module('warhammer40k')
  .controller('RuleDetailsCtrl', function ($scope, $http, $routeParams) {
    $scope.rule =
    {
      id : 1,
      name : 'Règle1',
      description : '01234657890123465789012346578901234657890123465789'
    };

    var id = $routeParams.id;

    $http.get('/rule/rest/' + id).success(
      function(data) {
        $scope.rule = data;
        $scope.rule.reference = rule.codex + ', page' + rule.page;
      }
    );
  });

