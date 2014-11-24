'use strict';

eventsApp.controller('TimeoutController',  function TimeoutController($scope, $locale) {
    //Date.now use pollyfill if old browser
    $scope.myDate =  Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
    //$scope.myFormat = $locale.DATETIME_FORMATS.shortDate;


});