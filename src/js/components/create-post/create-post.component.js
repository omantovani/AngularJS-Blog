angular.module('blogApp').component('createPost', {
  templateUrl: 'js/components/create-post/create-post.component.html',
  controller: ['authorService', '$scope', function(authorService, $scope) {
    let ctrl = this

    ctrl.$onInit = async function() {
      ctrl.post = {}

      ctrl.authors = await authorService.listAll()

      $scope.$apply();
    }

    ctrl.save = function() {
      console.log(
        ctrl.post.title,
        ctrl.post.authorId,
        ctrl.post.text
      );
    }
  }]
});