



var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'Store-container/men.html',
          
        })
        .when('/store-man-tab-tshirts', {
            templateUrl : 'Store-container/store-man-tab-tshirts.html',
            
        })
        .when('/men-hoodies&sweatshirts', {
            templateUrl : 'Store-container/men-hoodies&sweatshirts.html',
         
        })

        .when('/men-Sportswear', {
            templateUrl : 'Store-container/men-Sportswear.html',
        })

        .when('/women', {
            templateUrl : 'Store-container/women.html',
         
    
        })
        .when('/women-tshirts', {
            templateUrl : 'Store-container/women-tshirts.html',
        })
        
        .when('/women-hoodies', {
            templateUrl : 'Store-container/women-hoodies.html',
        })

        .when('/women-longtshirts', {
            templateUrl : 'Store-container/women-longtshirts.html',
        })

        .when('/women-Sportswear', {
            templateUrl : 'Store-container/women-Sportswear.html',
        })

        .when('/allProducts-page1', {
            templateUrl : 'Store-container/allProducts-page1.html',
        })
        .when('/allProducts-page2', {
            templateUrl : 'Store-container/allProducts-page2.html',
        })



        .otherwise({
            redirectTo:'/'
        });
});

