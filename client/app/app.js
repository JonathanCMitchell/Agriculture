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
		})
		.catch(function(error) {
			console.error('we have an error in searchfactory get', error)
		}) 
	}

	return {
		getSearch: getSearch
	}
})


.controller('SearchController', function($scope,_, SearchFactory) {		
	$scope.getSearch = function() {
		$scope.loading= true
		SearchFactory.getSearch()
		.then(function(data) {
			console.log('scope data is', data.slice(0,100))
			data = data.slice(0,100)
			$scope.dataArr = data
			$scope.addImage()
			$scope.noData=false;
			$scope.cats = $scope.dataArr.map(function(dataObj) {
				return dataObj.category
			})
			$scope.dataArr.forEach(function(dataObj) {
				if (dataObj.business === undefined) {
					dataObj.business = 'not listed'
				}
			})
			$scope.loading = false
		})
	}


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
		 	"corn": "./assets/corn.png",
		 	"garlic": "./assets/garlic.jpeg",
		 	"herbs": "./assets/herbs.jpeg",
		 	"straw": "./assets/straw.jpeg",
		 	"horses": "./assets/horses.jpeg",
		 	"apples": "./assets/apples.jpeg",
		 	"pumpkins": "./assets/pumpkins.jpeg",
		 	"sheep": "./assets/sheep.jpeg"
	 	}

	 
	 $scope.addImage = function() {
	 	$scope.dataArr.forEach(function(dataObj) {
	 		if (imageUrls[dataObj.item.toLowerCase()] !== undefined) {
	 			dataObj.image = imageUrls[dataObj.item.toLowerCase()]
	 		}  else {
	 			dataObj.image = './assets/defaultt.png'
	 		}
	 	})
	 }

	

	
		$scope.checkForData = function() {
			console.log('scope cats', $scope.cats)
			console.log('scopefiltertext', $scope.filterText)
			if ($scope.cats !== undefined) {
				$scope.noData = true
			if (_.contains($scope.cats, $scope.filterText)) {
				console.log("we hit contains")
				$scope.noData = false
			}
			}
		}



	

})
	


		
	

