'use strict';

eventsApp.controller('EventDetailsController', function EventDetailsController($scope, eventData, $anchorScroll, $routeParams, $route) {
      //$scope.events = eventData.getAllEvents();
    $scope.snippet = '<span style="color:red;">Hi there</span>';
    $scope.boolValue = false;
    $scope.mystyle = {color: 'red'};
    $scope.myclass = "blue";
    $scope.buttonDisabled = true;
    $scope.sortorder = 'name';

    //$scope.event = eventData.getEvent($routeParams.eventId);
    $scope.event = $route.current.locals.event;

    //console.log('foo' + $route.current.foo);
    //params include every thing pathParams includes just the path
    //console.log('foo' + $route.current.params.foo);
    //console.log('eventId' + $route.current.params.eventId);

    $scope.reload = function() {
        $route.reload();
        console.log('reload');
    };

    //With resource
    /*$scope.event = eventData.getEvent().$promise.then(
        function(event){
            $scope.event = event;
            console.log(event);
        },
        function(statusCode){
            console.log(statusCode);
        }
    );*/


    //With http and deferred
    /*eventData.getEvent().then(
        function(event){
            $scope.event = event;
        },
        function(statusCode){
            console.log(statusCode);
        }
    );*/

    $scope.upVoteSession = function (session){
        session.upVoteCount++;

    };
    $scope.downVoteSession = function (session){
        session.upVoteCount--;

    };

    $scope.scrollToSession = function() {
        $anchorScroll();
    };
});
/*
 name: 'Angular Boot Camp',
            date: dateInMs,
            time: '09:37',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            session: [
                {
                    name: 'Dir Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi lacus, accumsan in tincidunt eget, venenatis eu libero. Phasellus non commodo leo, vitae pellentesque justo.',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun', 
                    creatorName: 'Martin Falcon',
                    duration: 2,
                    level: 'Expert',
                    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi lacus, accumsan in tincidunt eget, venenatis eu libero. Phasellus non commodo leo, vitae pellentesque justo.',
                    upVoteCount: 34
                },
                {
                    name: 'Super controllers',
                    creatorName: 'John Duncan',
                    duration: 4,
                    level: 'Pro',
                    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi lacus, accumsan in tincidunt eget, venenatis eu libero. Phasellus non commodo leo, vitae pellentesque justo.',
                    upVoteCount: 88
                },
            ]
            */