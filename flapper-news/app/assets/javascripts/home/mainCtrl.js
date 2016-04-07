angular.module('flapperNews')
.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.posts = posts.posts;

  $scope.addPost = function(){
    if($scope.title === '') { return; }
    posts.create({
      title: $scope.title,
      link: $scope.link,
	  upvotes:'0'
    });
    $scope.title = '';
    $scope.link = ''; // refresh to null 
  };

  $scope.incrementUpvotes = function(post) {
    posts.upvote(post);
  };

}]);
