angular.module('app', [])

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

.controller('SearchController', function($scope, SearchFactory) {
	// $scope.data.dataLoading = false
	$scope.hello = 'hello world';	
	$scope.getSearch = function() {
			// $scope.data.dataLoading = true
		SearchFactory.getSearch()
		.then(function(data) {
			console.log('scope data is', data.slice(0,100))
			data = data.slice(0,100)
			$scope.dataArr = data
			// $scope.data.dataLoading = false
		})
	}



})
	


		
	

