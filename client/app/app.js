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
			$scope.noData=false;
			$scope.cats = $scope.dataArr.map(function(dataObj) {
				return dataObj.category
			})
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
	 			dataObj.image = './assets/default.png'
	 		}
	 		console.log('dataObj after image prop', dataObj)
	 	})
	 }

	 //form validation for business, address, category, foodname


	// $scope.checkForData = function() {
	//  	if (!$scope.dataArr) {
	//  		console.log("there is no dataArr")
	//  		$scope.noData = true
	//  	}
	//  	else if ($scope.dataArr) {
	//  		$scope.dataArr.forEach(function(dataObj) {
	//  			console.log('we are in checkfordata')
	//  			console.log('filterText is', $scope.filterText)
	//  			console.log('scopeDataObj', dataObj)
	//  			if (dataObj.business !== undefined) {
	//  				console.log('dataObj.business: ', dataObj.business)
	//  				if (dataObj.business.indexOf($scope.filterText) === -1) {
	//  					console.log('business invalid')
	//  					$scope.noData = true
	//  				}
	//  			}
	//  			else {
	//  				$scope.noData = false
	//  			}
	//  		})
	//  	}
	// }

	

	// $scope.log = function() {
	// 	$scope.props = $scope.dataArr.map(function(dataObj) {
	// 	return {
	// 	business: dataObj.business,
	// 	category: dataObj.category,
	// 	city: dataObj.location_1_city,
	// 	state: dataObj.location_1_state,
	// 	zipcode: dataObj.zipcode,
	// 	foodname: dataObj.item,
	// 	}
	// })

	
	


// $scope.props = $scope.dataArr.map(function(dataObj) {
// 			return {
// 				category: dataObj.category,
// 				city: dataObj.location_1_city,
// 				state: dataObj.location_1_state,
// 				zipcode: dataObj.zipcode,
// 				foodname: dataObj.item,
// 				}
// 			}
// 		})


$scope.checkForData = function() {
	$scope.noData = false
	if (!_.contains($scope.cats, $scope.filterText)) {
		$scope.noData = true
	}
}


//make an array of [business names, address, category, foodname]
// check form validation against those

	

})
	


		
	

