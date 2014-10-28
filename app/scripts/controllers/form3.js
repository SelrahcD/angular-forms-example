'use strict';

angular.module('formsApp')
  .controller('Form3', function ($scope) {
    
    $scope.ecurie = {
      poneys: []
    };
    
    $scope.addPoney = function() {
    	$scope.ecurie.poneys.push({});
    };

  });
