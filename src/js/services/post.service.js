angular.module('blogApp').factory('postService', ['$http', 'endpontApi', function($http, endpontApi) {
  return {
    listAll: function() {
      return new Promise((resolve, reject) => {
        $http.get(endpontApi + '/posts')
          .then(response => resolve(response.data))
          .catch(error => reject(error))
      });
    },
    save: function(post) {}
  }
}]);