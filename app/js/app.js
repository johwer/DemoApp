'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource'])
    .factory('myCache',  function myCache($cacheFactory) {
        // return $cacheFactory('myCache', {capacity:3});
        return $cacheFactory('myCache', {capacity:3});
    });
