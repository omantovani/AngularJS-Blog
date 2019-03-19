angular.module('blogApp').component('viewPost', {
  templateUrl: require('./view-post.component.html'),
  bindings: {
    postId: '@'
  },
  controller: ['postService', '$scope', function(postService, $scope) {
    let ctrl = this
    ctrl.$onInit = async function() {
      try {
        ctrl.post = await postService.get(ctrl.postId)

        $scope.$apply()
      } catch (error) {
        console.error(error)
        alert('Failed to load post ' + ctrl.postId)
      }
    }
  }]
})