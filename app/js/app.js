'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController',
                resolve: {
                    event: function(eventData){
                        console.log(!!eventData.getAllEvents().$promise);
                        return eventData.getAllEvents().$promise;
                    }
                }
            });
        $routeProvider.when('/event/:eventId',
            {
                foo: 'bar',
                templateUrl: '/templates/EventDetails.html',
                controller: 'EventDetailsController',
                resolve: {
                    event: function($route, eventData){
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        //$routeProvider.when('/event/:eventId',
        //{ 
            //template can be used if generating the page dynamic
        //    template: 'HELLO WORLD',
        //    controller: 'EventDetailsController'
        //});
        
        
        $routeProvider.otherwise(
            {
                redirectTo: '/'
            }
        );
        $locationProvider.html5Mode(true);
    })

    .factory('myCache',  function myCache($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3});
    });

