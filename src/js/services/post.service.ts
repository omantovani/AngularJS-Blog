angular.module('blogApp').factory('postService', ['$http', 'endpontApi', function($http, endpontApi) {
  return {
    listAll: function() {
      return new Promise((resolve, reject) => {
        $http.get(endpontApi + '/posts')
          .then(response => resolve(response.data))
          .catch(error => reject(error))
      });
    },
    save: function(post) {
      return new Promise(async(resolve, reject) => {
        let response = await $http.post(endpontApi + '/posts', post);

        if (response.status == 200) {
          resolve();
        } else {
          reject();
        }
      });
    },
    get: function(postId) {
      return new Promise(async(resolve, reject) => {
        let response = await $http.get(endpontApi + '/posts/' + postId);
        resolve(response.data);
      })
    }
  }
}]);