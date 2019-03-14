angular.module('blogApp').component('posts', {
  templateUrl: 'js/components/posts/posts.component.html',
  controller: ['postService', function(postService) {
    let ctrl = this;

    ctrl.$onInit = function() {
      ctrl.posts = postService.listAll();
    }
  }]
});