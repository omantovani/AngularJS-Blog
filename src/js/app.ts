declare var angular;

angular.module('blogApp', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when(`/home`, {
        template: `<home></home>`
      })
      .when(`/new`, {
        template: `<create-post></create-post>`
      })
      .when(`/posts`, {
        template: `<posts></posts>`
      })
      .when(`/view`, {
        template: '<view-post post-id="{{$resolve.postId}}"></view-post>',
        resolve: {
          
          postId: [
            '$location',
            function($location) {
              if ($location.search().postId) {
                return $location.search().postId
              }
            }
          ]
        }
      })
  }])
  .constant('endpontApi', 'http://localhost:3000/api')