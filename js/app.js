angular.module('app', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            
            .state('parks', {
                url: '/',
                templateUrl: './states/parks.html',
                controller: 'ParkController',
                name: 'Parks'
            })

            .state('beaches', {
                url: '/beaches',
                templateUrl: './states/beaches.html',
                controller: 'BeachController',
                name: 'Beaches'
            })

            .state('map', {
                url: '/map/:id',
                templateUrl: './states/map.html',
                controller: 'MapController',
                name: 'Map'
            })

        $urlRouterProvider.otherwise("/");
    })
