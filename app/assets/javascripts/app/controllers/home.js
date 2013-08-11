var myApp = angular.module('myApp',[]);

myApp.controller('GreetingCtrl', ['$scope', function($scope) {
  $scope.some_text = 'Well hi there';
  $scope.show_data = ['lolo'];

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