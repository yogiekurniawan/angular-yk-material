'use strict';

/**
 * @ngdoc function
 * @name projekApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projekApp
 */
angular.module('projekApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
