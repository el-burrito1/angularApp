'use strict';

  var app = angular.module('app', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])


  .config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'mainControl'
      })

    $routeProvider.when('/test' , {
        templateUrl: 'app/views/test.html',
        controller: 'testControl'
      })
      
    $routeProvider.otherwise({
        redirectTo: '/'
      });
  });

app.controller('mainControl' , function($scope , $http){
  $scope.credentials = {username: '' , password: ''};

  $scope.login = function(){
    console.log($scope);
    var url = "http://127.0.0.1:3000/endpoint?callback=JSON_CALLBACK";
    var responsePromise = $http.jsonp(url, {params: {
      username:$scope.credentials.username,
      password:$scope.credentials.password
    }}).success(function (data){
      console.log(data);
    }).error(function (data){
      console.log('error');
    });

    // responsePromise.success(function (data){
    //   console.log(data);
    // })
  }
})

app.controller('testControl' , function($scope){
  // window.scope = $scope;
  // console.log($scope);
  // $scope.credentials = {username: '' , password: ''};

  // $scope.login = function(){
  //   console.log($scope);
  // }
})
