(function () {
    'use strict';

    angular
        .module('app')
        .service('services', services);

    services.$inject = ['$http'];

    function services($http) {
        this.getData = getData;

        function getData() { }
    }
})();