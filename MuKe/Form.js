var userInfoModule=angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){
	$scope.userInfo={
		email:"2773840039@126.com",
		password:"anna23487650",
		autoLogin:true
	};
}])