angular.module('app', [])
.constant('_', window._)
.run(function($rootScope) {
	$rootScope._ = window._
})

.factory('SearchFactory',function($http) {
	var getSearch = function() {
		return $http({
			method: "GET",
			url: "/api/search"
		})
		.then(function(response) {
			console.log('in SearchFactory successful get response is', response)
			return response.data
		}) //may need to add error callback here
	}

	

	 



	return {
		getSearch: getSearch
	}
})


.controller('SearchController', function($scope,_, SearchFactory) {		
	$scope.getSearch = function() {
		SearchFactory.getSearch()
		.then(function(data) {
			console.log('scope data is', data.slice(0,100))
			data = data.slice(0,30)
			$scope.dataArr = data
			$scope.addImage()
		})
	}

	//add property to dataArr's objects
	 //loop through dataArr

	 //if dataArr.item === 'corn'
	 // dataArr.img = 'corn.jpg'

	


		 var imageUrls= {
		 	"broccoli": "./assets/broccoli.png",
		 	"carrots": "./assets/carrots.png",
		 	"goat": "./assets/goat.png",
		 	"honey": "./assets/honey.png",
		 	"pepper": "./assets/pepper.png",
		 	"hay": "./assets/hay.png",
		 	"potatoes": "./assets/potatoes.png",
		 	"pasture": "./assets/pasture.png",
		 	"poultry" : "./assets/poultry.png",
		 	"tobacco":"./assets/tobacco.png",
		 	"corn": "./assets/corn.png"
	 	}

	 
	 $scope.addImage = function() {
	 	$scope.dataArr.forEach(function(dataObj) {
	 		if (imageUrls[dataObj.item] !== undefined) {
	 			dataObj.image = imageUrls[dataObj.item]
	 		}  else {
	 			dataObj.image = './assets/default.png'
	 		}
	 		console.log('dataObj after image prop', dataObj)
	 		console.log('dataImage afer imageprop', dataObj.image)
	 	})
	 }



	 $scope.log = function() {
	 	console.log('inside log',$scope.data.image)
	 }

	

})
	


		
	

