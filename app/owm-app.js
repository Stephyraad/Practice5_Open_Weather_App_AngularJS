angular.module('OwmApp', ['ngRoute'])
 	.value("OwmCites", ["New York", "Dallas", "Los Angeles"])
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : './home.html',
            controller : 'HomeCtrl'
        }).when("/cities/:city", {
        	templateUrl: "./city.html",
        	controller: "CityCtrl",
        	resolve:{
        		city: function(OwmCites, $route, $location){
        			var city = $route.current.params.city;
        			if(OwmCites.indexOf(city)== -1){
        				$location.path('/error');
        				return;
        			}
        			return city;
        		}
        	}
        })
        .when("/error", {
        	template: "<p>Error Page Not Found</p>"
        });
    })
    .controller('HomeCtrl', function($scope) {
        //empty for now
    })
    .controller("CityCtrl", function($scope, city){
    	$scope.city= city;
    });