'use strict';

eventsApp.controller('LocaleController',  function LocaleController($scope, $locale) {
    //Date.now use pollyfill if old browser
    $scope.myDate =  Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
    //$scope.myFormat = $locale.DATETIME_FORMATS.shortDate;


});