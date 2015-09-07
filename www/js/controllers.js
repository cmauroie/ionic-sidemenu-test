angular.module('starter.controllers', [])

.controller('MenuCtrl', function($scope, $ionicHistory, $state) {
  $scope.goHome = function() {
    $ionicHistory.nextViewOptions({
      disableAnimate: true,
      historyRoot: true
    })
    $state.go('page1');
  }
})

.controller('Page1Ctrl', function($scope, $rootScope) {
    $scope.myTitle = 'Page 1';

    $rootScope.$on('$ionicView.beforeEnter', function (e, data) {        
      if (data.enableBack) {
        $scope.$root.showHome = true;
      } else {
        $scope.$root.showHome = false;
      }
    });
})

.controller('Page2Ctrl', function($scope, $ionicHistory) {
  $scope.myTitle = 'Page 2'; 
})

.controller('Page3Ctrl', function($scope) {
  $scope.myTitle = 'Page 3';
});