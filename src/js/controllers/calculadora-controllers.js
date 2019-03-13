angular.module('blogApp').controller('calculadoraControllers', ['$scope', function($scope) {
  $scope.somarValores = function() {
    $scope.total = $scope.primeiroNumero + $scope.segundoNumero;
  }
}]);