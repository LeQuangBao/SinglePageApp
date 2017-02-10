// script.js
  //create the module and name it scotchApp
  var scotchApp = angular.module('scotchApp', []);
  scotchApp.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
      })

      .when('/about', {
        templateUrl: 'pages/home.html',
        controller: 'aboutController'
      })

      .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller: 'contactController'
      })
  });
  // create the controller and inject Angular's $scope
  scotchApp.controller('mainController', function($scope){
    $scope.message = 'Everyone come and see how good i look!';
  });

  scotchApp.controller('aboutController', function($scope){
    $scope.message = 'Look! i am an about page';
  })

  scotchApp.controller('contactController', function($scope){
    $scope.message = 'Contact us !JK. This is just a demo.';
  })
