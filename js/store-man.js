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



var app = angular.module('myAppp',[]);

app.controller('myCtrl',function($scope){
    

   
    $scope.productsOne = [
        { img: './img/storeImg/store-women-img/women-item-2.jpg',
          color: 'black',
          name: "Cosmic ABCya - Women's Premium Hoodie",
          price:'49.99'
        },
        { img: './img/storeImg/store-women-img/women-item-7.jpg',
          color: 'white',
          name: "Pop Art Fuzzbugs - Women's Premium T-Shirt",
          price:'25.99'
        },
        { img: './img/storeImg/store-women-img/women-item-10.jpg',
          color: 'light-dark',
          name: "Vintage ABCya - Unisex Baseball T-Shirt",
          price:'25.99'
        },
        { img: './img/storeImg/store-man-img/man-item-2.jpg',
          color: 'black',
          name: "Cosmic ABCya - Men's Premium Hoodie",
          price:'49.99'
        },
        { img: './img/storeImg/store-man-img/man-item-10.jpg',
          color: 'navy',
          name: "Vintage ABCya - Unisex Baseball T-Shirt",
          price:'30.99'
        },
        
    ];
    $scope.productsTwo = [
        {
          img: './img/storeImg/store-women-img/women-item-4.jpg',
          color1: 'black',
          color2: 'white',
          name: "Cosmic ABCya - Women's Premium Hoodie",
          price:'25.99'
        },
        {
            img: './img/storeImg/store-women-img/women-item-5.jpg',
            color1: 'black',
            color2: 'gray',
            name: "Too School For Cool - Women's Premium T-Shirt",
            price:'29.99'
        },
        {
            img: './img/storeImg/store-women-img/women-item-6.jpg',
            color1: 'black',
            color2: 'blue',
            name: "Donuts & Unicorns - Women's Premium Hoodie",
            price:'55.99'
        },
        {
            img: './img/storeImg/store-man-img/man-item-4.jpg',
            color1: 'black',
            color2: 'blue',
            name: "Too School For Cool - Men's Premium T-Shirt",
            price:'25.99'
        },
        
    ];
    $scope.productsThree = [
        {
            img: './img/storeImg/store-women-img/women-item-11.jpg',
            color1: 'navy',
            color2: 'light-gray',
            color3: 'white',
            name: "Vintage ABCya - Flexfit Baseball Cap",
            price:'21.49'
        },
        {
            img: './img/storeImg/store-man-img/man-item-5.jpg',
            color1: 'white',
            color2: 'light-gray',
            color3: 'green',
            name: "Pop Art Fuzzbugs - Men's Premium T-Shirt",
            price:'26.99'
        },
        {
            img: './img/storeImg/store-man-img/man-item-8.jpg',
            color1: 'black',
            color2: 'light-dark',
            color3: 'white',
            name: "Metal ABCya - Flexfit Baseball Cap",
            price:'10.99'
        },
    ];
    $scope.productsFour = [
        {
            img: './img/storeImg/store-women-img/women-item-3.jpg',
            color1: 'black',
            color2: 'light-dark',
            color3: 'royal-blue',
            color4: 'white',
            name: "ABCya Logo - Snapback Baseball Cap",
            price:'20.99'
        },
        {
            img: './img/storeImg/store-women-img/women-item-8.jpg',
            color1: 'gray',
            color2: 'blue',
            color3: 'white',
            color4: 'yellow',
            name: "Fuzzbug Dots - Women's Premium T-Shirt",
            price:'25.99'
        },
        {
            img: './img/storeImg/store-women-img/women-item-9.jpg',
            color1: 'yellow',
            color2: 'blue',
            color3: 'pink',
            color4: 'red',
            name: "Bingo! - Women's Premium T-Shirt",
            price:'20.99'
        },
        {
            img: './img/storeImg/store-women-img/women-item-12.jpg',
            color1: 'light-gray',
            color2: 'light-dark',
            color3: 'royal-blue',
            color4: 'green',
            name: "Vintage ABCya - Women's Premium T-Shirt",
            price:'20.99'
        },
        {
            img: './img/storeImg/store-man-img/man-item-3.jpg',
            color1: 'black',
            color2: 'light-dark',
            color3: 'royal-blue',
            color4: 'white',
            name: "ABCya Logo - Snapback Baseball Cap",
            price:'20.99'
        },
        {
            img: './img/storeImg/store-man-img/man-item-6.jpg',
            color1: 'yellow',
            color2: 'blue',
            color3: 'light-dark',
            color4: 'red',
            name: "ABCya Pizza - Men's Premium T-Shirt",
            price:'25.99'
        },
        {
            img: './img/storeImg/store-man-img/man-item-9.jpg',
            color1: 'light-dark',
            color2: 'light-gray',
            color3: 'royal-blue',
            color4: 'red',
            name: "Fuzzbug Dots - Men's Premium T-Shirt",
            price:'50.99'
        },
        {
            img: './img/storeImg/store-man-img/man-item-11.jpg',
            color1: 'blue',
            color2: 'black',
            color3: 'royal-blue',
            color4: 'white',
            name: "ABCya Logo - Men's Premium T-Shirt",
            price:'25.99'
        },
        {
            img: './img/storeImg/store-man-img/man-item-12.jpg',
            color1: 'black',
            color2: 'light-dark',
            color3: 'red',
            color4: 'green',
            name: "Too School For Cool - Flexfit Baseball Cap",
            price:'20.99'
        },
    ];
    $scope.productsFive = [
        {
            img: './img/storeImg/store-women-img/women-item-1.jpg',
            color1: 'green',
            color2: 'blue',
            color3: 'red',
            color4: 'light-gray',
            color5: 'light-dark',
            name: "ABCya Pizza - Women's Premium T-Shirt",
            price:'25.99'
        },
        {
            img: './img/storeImg/store-man-img/man-item-1.jpg',
            color1: 'green',
            color2: 'blue',
            color3: 'gray',
            color4: 'light-gray',
            color5: 'light-dark',
            name: "ABCya Pizza - Men's Premium T-Shirt",
            price:'25.99'
        },
        {
            img: './img/storeImg/store-man-img/man-item-7.jpg',
            color1: 'green',
            color2: 'blue',
            color3: 'gray',
            color4: 'light-gray',
            color5: 'light-dark',
            name: "Vintage ABCya - Men's Premium Hoodie",
            price:'30.99'
        },
    ];

});
