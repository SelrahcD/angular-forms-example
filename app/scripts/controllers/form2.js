'use strict';

angular.module('formsApp')
  .controller('Form2', function ($scope) {

    $scope.poney = {};
    
    $scope.doSubmit = function() {
      
    	alert('Submit !');
    };

    $scope.doCancel = function() {
      alert('Cancel !');
    };

  });
