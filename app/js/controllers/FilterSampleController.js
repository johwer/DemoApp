//You can use the name of the filter with the key word filter directly durationsFilter
//eventsApp.controller('FilterSampleController', function FilterSampleController($scope, $filter) {
eventsApp.controller('FilterSampleController', function FilterSampleController($scope, durationsFilter) {
     $scope.data = {};

     //var durations = $filter('durations');
     
     /*$scope.data.durations1 = durations(1);
     $scope.data.durations2 = durations(2);
     $scope.data.durations3 = durations(3);
     $scope.data.durations4 = durations(4);
    */
     $scope.data.durations1 = durationsFilter(1);
     $scope.data.durations2 = durationsFilter(2);
     $scope.data.durations3 = durationsFilter(3);
     $scope.data.durations4 = durationsFilter(4);

});