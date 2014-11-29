'use strict';

eventsApp.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});
   
    return {
        //Using $resource
        getEvent: function(eventId) {
            return resource.get({id:eventId});        
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
            console.log(event.id);
            if(!event.id){
                event.id = 999+1;
            } else{
                event.id = event.id+1;  
            }
           
            console.log(resource.length);
            return resource.save(event);
        },
        getAllEvents: function(){
            return resource.query();
        }    
    };
});