const app1 = angular.module('app1', []);
app1.controller('DigestController', function ($scope) {
  $scope.digestMessage = "hello";
  setInterval(() => {
    $scope.digestMessage += "!";
    $scope.$digest();
  }, 100);
});

const app2 = angular.module('app2', []);
app2.controller('ApplyController', function ($scope) {
  $scope.applyMessage = "hello";

  setInterval(() => {
    $scope.$apply(() => {
      $scope.applyMessage += "!";
    })
  }, 100);
});

angular.bootstrap(document.getElementById('app1'), ['app1']);
angular.bootstrap(document.getElementById('app2'), ['app2']);
