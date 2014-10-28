'use strict';


angular.module('formsApp', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('form1', {
        url: '/',
        templateUrl: 'views/form1.html',
        controller: 'Form1'
      })
      .state('form2', {
        url: '/form2',
        templateUrl: 'views/form2.html',
        controller: 'Form2'
      })
      .state('form3', {
        url: '/form3',
        templateUrl: 'views/form3.html',
        controller: 'Form3'
      })
      .state('form4', {
        url: '/form4',
        templateUrl: 'views/form4.html',
        controller: 'Form4'
      })
      .state('form5', {
        url: '/form5',
        templateUrl: 'views/form5.html',
        controller: 'Form5'
      })
      .state('form6', {
        url: '/form6',
        templateUrl: 'views/form6.html',
        controller: 'Form6'
      })
  });




