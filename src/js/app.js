angular.module('blogApp', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when(`/home`, {
      template: `<home></home>`
    }).when(`/new`, {
      template: `<create-post></create-post>`
    }).when(`/posts`, {
      template: `<posts></posts>`
    })
  }])
  .constant('endpontApi', 'http://localhost:3000/api')