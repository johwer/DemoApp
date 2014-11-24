eventsApp.factory('$exectionHandler',function(){
    return function (exception){
        console.log('execption handled' + exception.message);
         
    };
});