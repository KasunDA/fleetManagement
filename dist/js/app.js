var myAppDev = angular.module('mainModule', ['ui.router', 'ngMockE2E']);
myAppDev.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'modules/dashboard'
    })
    .state('company', {
        url: '/company',
        templateUrl: 'modules/company',
        controller:  'company.mainController'
    })
    .state('companyDetail', {
        url: '/companyDetail/:isEdit/:editId',
        templateUrl: 'modules/company/subModule/add',
        controller:  'company.addController'
    })
  $urlRouterProvider.otherwise('/home');

});
myAppDev.run(function($httpBackend, $rootScope) {

    $httpBackend.whenGET('/company/get').respond({
                companyName:'SRS Transport',
                ssiNo:'BN12345',
                panNumber:'AMYIF767F',
                address:'13, chettinadu villa, perumbakkam',
                ownerList:'',
                typeOfCompany:'S'
           });
    
    $httpBackend.whenGET(/^\w+.*/).passThrough();
    $httpBackend.whenPOST(/^\w+.*/).passThrough();
});


myAppDev.factory('alertService', function($rootScope) {
    var alertService = {};

    alertService.add = function(type, msg) {
        var icons = {'success':'check'};
        $rootScope.alerts.push({'type': type, 'msg': msg, 'icon':icons[type]});
    };

    alertService.clear = function(){
        $rootScope.alerts = [];
    }            

    return alertService;
  });

myAppDev.controller("appController", function($rootScope){
     // create an array of alerts available globally
    $rootScope.alerts = [];

    $rootScope.closeAlert = function(index) {
        $rootScope.alerts.splice(index, 1);
    };
});

myAppDev.filter('titleCase', function() {
    return function(input) {
      input = input || '';
      return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
})