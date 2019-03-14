angular.module('blogApp').factory('postService', ['$http', function($http) {
  return {
    listAll: function() {
      return new Promise((resolve, reject) => {
        $http.get('http://localhost:3000/api/posts')
          .then(response => resolve(response.data))
          .catch(error => reject(error))
      });
    },
    save: function(post) {}
  }
}]);