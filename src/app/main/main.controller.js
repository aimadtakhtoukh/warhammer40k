'use strict';

angular.module('warhammer40k')
  .controller('MainRuleCtrl', function ($scope, $http, $location) {
    $scope.rules = [
      {
        id : 1,
        name : 'Règle1',
        description : '01234657890123465789012346578901234657890123465789'
      },
      {
        id : 1,
        name : 'Règle1',
        description : '01234657890123465789012346578901234657890123465789'
      },
      {
        id : 1,
        name : 'Règle1',
        description : '01234657890123465789012346578901234657890123465789'
      },
      {
        id : 1,
        name : 'Règle1',
        description : '01234657890123465789012346578901234657890123465789'
      },
      {
        id : 1,
        name : 'Règle1',
        description : '01234657890123465789012346578901234657890123465789'
      }
    ];

    $http.get('/rule/rest/all').success(
      function(data) {
        $scope.rules = data;
      }
    );

    $scope.showRule = function(id) {
      $location.path('/rule/' + id);
    };
  });
