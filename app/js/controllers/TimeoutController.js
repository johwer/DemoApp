'use strict';

eventsApp.controller('TimeoutController',  function TimeoutController($scope, $timeout) {
    
    //Use $timeout instead of setTimeout to bind the event otherwise it will 
    //revalue the rebind the result when the next event will occur

    var promise = $timeout(function(){
        $scope.name = "Johan Wergelius";
    }, 3000);


    $scope.cancel = function() {
        $timeout.cancel(promise);
    };


});