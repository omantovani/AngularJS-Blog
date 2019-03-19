angular.module('blogApp').factory('authorService', ['$http', 'endpontApi', function($http, endpontApi) {
  return {
    listAll: function() {
      return new Promise(async(resolve, reject) => {
        let response = await $http.get(endpontApi + '/authors')
        resolve(response.data)
      });
    }
  }
}])