'use strict';

eventsApp.controller('MainMenuController',  function MainMenuController($scope, $location) {
    //Look at what the $location contains
    console.log('absUrl', $location.absUrl());
    console.log('protocol', $location.protocol());
    console.log('port', $location.port());
    console.log('host', $location.host());
    console.log('path', $location.path());
    console.log('search', $location.search());
    console.log('hash', $location.hash());
    console.log('url', $location.url());

    console.log($location);

    $scope.createEvent = function(){
        //If you don't want to add to the history use replace
        //$location.replace();

        $location.url('/newEvent');
    };

});