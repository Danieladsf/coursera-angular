(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchState ="";
  $scope.lunchList ="";

  $scope.lunchMessage = function(){
    if($scope.lunchList){
      if ($scope.lunchCount() >3)
      {
        $scope.lunchState = "Too much!";
      }
      else {
        $scope.lunchState = "Enjoy!";
      }
    }
    else {
      $scope.lunchState = "Please enter data first";
    }


  };

  $scope.lunchCount = function () {
    var lunchItems = $scope.lunchList.split(',');
    return lunchItems.length;
  };
}

})();
