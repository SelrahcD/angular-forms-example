'use strict';

angular.module('formsApp')
  .controller('Form1', function ($scope) {
    
    $scope.doSubmit = function(formName) {
    	alert('Submit ' + formName + '!');
    };

    $scope.doCancel = function(formName) {
      alert('Cancel ' + formName + '!');
    };

  });
