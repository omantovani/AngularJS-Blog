angular.module('blogApp').component('viewPost', {
  templateUrl: require('./view-post.component.html'),
  bindings: {
    postId: '@'
  },
  controller: ['postService', '$scope', 'endpontApi', function(postService, $scope, endpontApi) {
    let ctrl = this
    let ObjectID = require("bson-objectid");

    ctrl.$onInit = async function() {
      try {
        ctrl.post = await postService.get(ctrl.postId)
        ctrl.post.created = ObjectID().getTimestamp();
        ctrl.post.photoUrl = `${endpontApi}/PostPhotoContainers/main/download/${ctrl.post.id}`

        $scope.$apply()
      } catch (error) {
        console.error(error)
        alert('Failed to load post ' + ctrl.postId)
      }
    }
  }]
})