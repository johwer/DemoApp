'use strict';

eventsApp.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});
   // var d = new Date();
   // var dateInMs = d.getMilliseconds();
    
    return {
        //Using $resource
        getEvent: function() {
            return resource.get({id:1});        
        },

        //Using $http and $q and $log 
        // getEvent: function (){
        //     var deferred = $q.defer();
        //    $http({method: 'GET', url: '/data/event/1'}).
        //         success(function(data, status, headers, config){
        //             deferred.resolve(data);
        //         }).
        //         error(function(data, status, headers, config){
        //             //$log.warn(data, status, headers, config);
        //             deferred.reject(status);
        //         });
        //     return deferred.promise;
        // }

        saveEvent: function(event) {
            event.id = 999;
            
            return resource.save(event);
        }    
    };
});