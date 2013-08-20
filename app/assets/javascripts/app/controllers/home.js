var myApp = angular.module('myApp',['ngResource']);

myApp.controller('GreetingCtrl', ['$scope', '$resource', function($scope, $resource) {
  $scope.some_text = 'Well hi there';
  $scope.show_data = ['lolo'];

  var Task = $resource('/api/tasks/:taskId');

  $scope.task = Task.get({taskId: 1});
  $scope.tasks = Task.query();

  $scope.newtask = new Task;

  $scope.saveTask = function(task) {
    task.$save();
    $scope.tasks = Task.query(); 
  };

  $scope.respondA = function() {
    $.get('/api/show').then(function(response) { 
      $scope.show_data = response;
      console.log( $scope.show_data);
      $scope.$apply();
    }, function(errors) {
      $scope.show_data = errors;
    });
  };
}]);

myApp.config( function($httpProvider){
 var authToken = $("meta[name=\"csrf-token\"]").attr("content");
 $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
});