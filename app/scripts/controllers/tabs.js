'use strict';

/**
 * @ngdoc function
 * @name projekApp.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the projekApp
 */
angular.module('projekApp')
  .controller('TabsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
