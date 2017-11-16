// declare a module
var myAppModule = angular.module(trial, []);

// configure the module.
// in this example we will create a greeting filter
myAppModule.filter('greet', function() {
 return function(name) {
    return 'Hello, ' + name + '!';
  };
});

//declaring a controller
var myApp = angular.module('spicyApp1', []);

myApp.controller('SpicyController', ['$scope', function($scope) {
    $scope.spice = 'very';

    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
}]); //end of creating controller
//creatinng a filter
angular.module('FilterInControllerModule', []).
controller('FilterController', ['filterFilter', function FilterController(filterFilter) {
  this.array = [
    {name: 'Tobias'},
    {name: 'Jeff'},
    {name: 'Brian'},
    {name: 'Igor'},
    {name: 'James'},
    {name: 'Brad'}
  ];
  this.filteredArray = filterFilter(this.array, 'a');
}]);
//end of filtering
