angular.module('blogApp').factory('postService', [function() {
  return {
    listAll: function() {
      return [{
          title: "Foo"
        },
        {
          title: "Bar"
        }
      ];
    },
    save: function() {}
  }
}]);