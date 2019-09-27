var page = angular.module('page',['ngRoute']);

page.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);

        // $routeProvider
        //         .when('/',{
        //             templateUrl: 'frontend/views/front-page.html',
        //         })
        //         .when('/produkty',{
        //             templateUrl: 'frontend/views/produkty.html'
        //         })
        //         .when('/osuszanie',{
        //             templateUrl: 'frontend/views/osuszanie.html'
        //         })
        //         .when('/realizacje',{
        //             templateUrl: 'frontend/views/realizacje.html'
        //         })
        //         .otherwise({
        //             redirectTo: '/'
        //         });
}]);

page.controller('PageController', ['$scope','$http', function($scope, $http){

        // $http.get('http://iwconcept.bblab.pl/wp-json/wp/v2/pages/2').success(function(data){
        //     $scope.page = data;
        // });
}]);
