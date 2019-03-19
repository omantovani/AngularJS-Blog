angular.module('blogApp').component('createPost', {
  templateUrl: require('./create-post.component.html'),
  controller: ['authorService', '$scope', 'postService', '$location',
    function(authorService, $scope, postService, $location) {
      let ctrl = this

      ctrl.$onInit = async function() {
        ctrl.post = {}
        ctrl.authors = await authorService.listAll()

        $scope.$apply();
      }

      ctrl.save = async function() {
        try {
          await postService.save(ctrl.post)
          $location.path('/posts')

          $scope.$apply();
        } catch (error) {
          alert('Faile')
          console.error(error);
        }
      }
    }
  ]
});