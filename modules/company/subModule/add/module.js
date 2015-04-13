angular.module('mainModule').controller('company.addController', ['$scope', '$stateParams', 'company.updateService' , function($scope, $stateParams, updateService){
	// get the id
    $scope.isEdit = $stateParams.isEdit;
   	
   	function init(){
   		 $scope.model = {
				companyName:'',
				ssiNo:'',
				panNumber:'',
				address:'',
				owners:'',
				email:'',
				phone:'',
				typeOfCompany:'S'
		   };
   	}

    if($scope.isEdit === 'update'){
    	updateService.getCompany($stateParams.editId).then(function(data){
    		$scope.model = data[0];
    	});    	
    }
    $scope.updateDetails = function(){
    	updateService.addCompany($scope.model);
    }

    $scope.reset = function(){
    	init();
    	$scope.companyForm.$setPristine()
    }


    init();

}]);
