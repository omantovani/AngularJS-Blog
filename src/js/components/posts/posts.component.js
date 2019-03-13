angular.module('blogApp').component('posts', {
  templateUrl: 'js/components/posts/posts.component.html',
  controller: [function() {
    let ctrl = this;

    ctrl.$onInit = function() {
      ctrl.posts = [{
          title: "Foo"
        },
        {
          title: "Bar"
        }
      ]
    }
  }]
})