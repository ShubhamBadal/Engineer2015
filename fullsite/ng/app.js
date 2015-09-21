var Engi;

	Engi = angular.module('Engi', ['ngRoute','ngAnimate','ngSanitize']);


	Engi.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

		$routeProvider
		.when('/events', {
			templateUrl: './views/modals.html',
		})
		.when('/events/:cat', {
			templateUrl: './views/modals.html'
		})
		.when('/events/:cat/:id', {
			templateUrl: './views/leaf.html'
		})
		.when('/workshops', {
			templateUrl: './views/modals.html'
		})
		.when('/workshops/:id', {
			templateUrl: './views/leaf.html'
		})
		.when('/techspeaks', {
			templateUrl: './views/modals.html'
		})
		.when('/techspeaks/:id', {
			templateUrl: './views/leaf.html'
		})
		.when('/technites', {
			templateUrl: './views/modals.html'
		})
		.when('/technites/:id', {
			templateUrl: './views/leaf.html'
		})
		.when('/mainshow', {
			templateUrl: './views/modals.html'
		})
		.when('/mainshow/:id', {
			templateUrl: './views/leaf.html'
		})
		.when('/fillform', {
			templateUrl: './views/form.html'
		})
		.when('/CA', {
			templateUrl: './views/leaf.html'
		})
		.when('/about', {
			templateUrl: './views/leaf.html'
		})
		.when('/sponsors', {
			templateUrl: './views/leaf.html'
		})
		.when('/engiconnect', {
			templateUrl: './views/leaf.html'
		})
		.when('/hospi', {
			templateUrl: './views/leaf.html'
		});

	}]);



	Engi.run(function ($rootScope, $location,$routeParams) {

		var history = [];

		$rootScope.$on('$routeChangeSuccess', function() {
			console.log($location.$$path)
			if(!$routeParams.id)
			history.push($location.$$path);
		});

		$rootScope.back = function () {
			$rootScope.prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
			$location.path($rootScope.prevUrl);
		};

	});

	Engi.controller('MainController', function($scope, $location,$timeout) {
		$scope.misc = {
			showModal:false,
			wasLeaf:false,
			leafCheck:0,
			prevPage:'/'
		}
		$scope.showModal = function(redirect){

			$('.scene').toggleClass('pusher')
			$timeout(function(){$scope.misc.parent= redirect;
			$location.path('/'+redirect);},200);
		}


	})
