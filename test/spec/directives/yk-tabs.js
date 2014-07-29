'use strict';

describe('Directive: ykTabs', function () {

  // load the directive's module
  beforeEach(module('projekApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<yk-tabs></yk-tabs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ykTabs directive');
  }));
});
