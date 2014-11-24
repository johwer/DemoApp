'use strict';

eventsApp.controller('EditEventController', function EditEventController ($scope, $location, $window, eventData) {
    $scope.event = {};

    $scope.saveEvent = function (event, newEventForm) {
        console.log(newEventForm);
        if (newEventForm.$valid) {
            eventData.saveEvent(event).$promise.then(
                function(response) {
                    console.log('success' + response);
                },
                function(response) {
                     console.log('fail' + response);
                }
            );
            
        }
    };

    $scope.cancelEdit = function (event) {
        $window.location = "/EventDetails.html";
    };

      $scope.navigateToDetails = function (event) {
        $location.url('/event/' + event.id);
      };
    }
);