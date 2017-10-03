// app.js
// create angular app
var validationApp = angular.module('validationApp', ['ngRoute']);

validationApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'mainController'
		})
		.when('/output.success', {
			template: '<h1>Hey Mahesh login successfully</h1><a href="#/home"> Back</a>'
		})
    .when('/output.fail', {
			template: '<h1>Hey Mahesh login failed</h1><a href="#/home"> Back</a>'
		})
		.otherwise({
			redirectTo: '/home'
		});
});
 
validationApp.service('validUser',function(){
     this.abc=false;
 this.validFun =function(userName,password){
     
     if(userName == "mahesh" &&  password =="mahesh123"){
         this.abc=true;
        }else{
        this.abc=false;
        }
     
     return this.abc;
 }
  this.fristfun= function(name){
     // alert("name: "+name);
   return name;   
  } 
 
 });  
// create angular controller
validationApp.controller('mainController', function($scope,validUser,$window) {

  // function to submit the form after all validation has occurred            
  $scope.submitForm = function() {
      
   var suchiVar = validUser.validFun($scope.user.username,$scope.user.password);
  

    var alertBoolean =  validUser.validFun($scope.user.username,$scope.user.password);
    if(alertBoolean){
      
    $window.location.href="#/output.success";
    }else{
   
      //$scope.successResponse ="Response from back end : "+alertBoolean;
        $window.location.href="#/output.fail";
    }
  };

 /**/
   

});

