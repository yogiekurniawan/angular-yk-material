'use strict';

/**
 * @ngdoc function
 * @name projekApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projekApp
 */
angular.module('projekApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
