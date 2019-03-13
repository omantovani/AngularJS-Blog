angular.module('blogApp').controller('postsController', ['$scope', function($scope) {
  $scope.init = function() {};
  $scope.init();

  $scope.posts = [{
      title: "Foo"
    },
    {
      title: "Bar"
    }
  ];

  $scope.addPost = function() {
    $scope.posts.push({
      title: "Teste"
    });
  };
}]);