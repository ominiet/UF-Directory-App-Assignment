angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.codeFilt = "";
    $scope.new = {};
    $scope.ind = {};
    


    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.setInd = function(index){
      $scope.ind = index;
    }
    $scope.addListing = function() {
      $scope.listings.push($scope.new);
      $scope.new = {};
    };
    $scope.deleteListing = function(y) {
      var index = $scope.listings.findIndex(x=>x.code===y.code)
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function() {

      return $scope.ind;
    };
  }
]);