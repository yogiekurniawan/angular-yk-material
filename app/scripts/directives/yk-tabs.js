(function() {

    'use strict';

    angular.module('material.component.yk.tabs', [])

    /**
     * @ngdoc modul
     * @name material.component.yk.tabs
     *
     * @descriptiom
     * arahan untuk membuat material desain untuk komponen web tabs
     */

    .directive('ykTabs', [tabsDirectiveFn])
        .directive('ykTabsContent', [tabsDirectiveContentFn])

    /**
     * @ngdoc directive
     * @name ykTabs
     *
     * @restrict E
     * @define tabsDirectiveFn
     * @controller tabsDirectiveCtrl
     *
     * @description
     *
     * @attrs {titleTabs:@} digunakan untuk menentukan judul tabs
     *
     * @example
     *
     */
     
    function tabsDirectiveFn() {
        return {
            restrict: 'E',
            replace: false,
            transclude: true,
            scope: {
                titleTabs: '@'
            },
            templateUrl: 'material/component/tabs/yk-tabs.html',
            controller: tabsDirectiveCtrl
        };

        function tabsDirectiveCtrl($scope) {
            var content = $scope.content = [];

            this.addcontentTabs = function(nav) {
                // tabs yang pertama akan diaktifkan jika array sama dengan nol
                if (content.length === 0) nav.selected = true;
                content.unshift(nav)
            }

            $scope.selected = function(nav) {
                // menonaktifkan semua tab
                angular.forEach(content, function(nav) {
                    nav.selected = false;
                });
                // mengaktifkan tab yang dipilih
                nav.selected = true;
            }
        }
    }

    /**
     * @ngdoc directive
     * @name ykTabsContent
     *
     * @restrict E
     * @define tabsDirectiveContentFn
     * @link linkTabsDirectiveContentFn
     *
     * @description
     *
     * @attrs {titleContent:@} digunakan untuk menentukan judul nav tabs
     *
     * @example
     *
     */
    function tabsDirectiveContentFn() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            require: '^ykTabs',
            scope: {
                titleContent: '@'
            },
            templateUrl: 'material/component/tabs/yk-tabs-content.html',
            link: linkTabsDirectiveContentFn
        };

        function linkTabsDirectiveContentFn(scope, elm, attrs, tabsCtrl) {
            // menambahkan tabs ke array content direvtive ykTabs
            tabsCtrl.addcontentTabs(scope);
        }
    }

}());
