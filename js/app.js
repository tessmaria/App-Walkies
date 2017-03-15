angular.module('app', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('parks', {
                url: '/',
                templateUrl: './states/parks.html',
                controller: 'ParkController',
                name: 'Parks'
            })
            .state('map', {
                url: '/map/:id',
                templateUrl: './states/map.html',
                controller: 'MapController',
                name: 'Map'
            })

        $urlRouterProvider.otherwise("/");
    })
