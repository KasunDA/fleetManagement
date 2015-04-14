angular.module('mainModule').controller('company.mainController', ['$scope', 'company.updateService', function($scope, updateService){
	updateService.getCompany('all').then(function(data){
		$scope.companyList = data;
	});
}]);


angular.module('mainModule').factory('company.updateService', ['$http', '$q', '$state', 'alertService', function($http, $q, $state, alertService){
	var deferred;
	return {
		getCompany: function(editId){
			deferred = $q.defer();
			$http.get('api/company/getDetails.php?id='+editId).success(function(data){
				deferred.resolve(data);
			})
			return deferred.promise
		},
		addCompany: function(data){
			$http.post('api/company/addDetails.php', data).success(function(data){
				alertService.add("success", "Record Added Successfully..");				
				$state.go('company');
				deferred.resolve('');
			}).error(function(){
				alertService.add("danger", "Record not added try again later");
				deferred.reject('');
			});
		}
	}
}]);