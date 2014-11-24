'use strict';

eventsApp.controller('CachSampleController',  function CachSampleController($scope, myCache) {
    $scope.addToCache = function(key, value){
        myCache.put(key, value);
        console.log(key+ 'key' + value + 'value');
    };

    $scope.readFromCache = function(key){
        console.log(key +'key readFromCache');
        return myCache.get(key);
    }; 
    
    $scope.getCacheStats = function() {
        console.log('return myCache info');
        return myCache.info();
    };
});