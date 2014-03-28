var CollectionApp = angular.module('collectionApp', []);

CollectionApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push(function ($q) {
        return {
            'response': function (response) {
                //Will only be called for HTTP up to 300
                console.log(response);
                return response;
            },
            'responseError': function (rejection) {
            	console.log(rejection.status);
                if(rejection.status === 401) {
                    location.reload();
                }
                return $q.reject(rejection);
            }
        };
    });
}]);

CollectionApp.controller('collectionCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.sendAjax = function() {
		$http.get('phones/abc.json').success(function(data) {
      	$scope.phone = data;
    });
	}
}]);