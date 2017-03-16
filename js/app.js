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

            .state('mountains', {
                url: '/mountains',
                templateUrl: './states/mountains.html',
                controller: 'BeachController',
                name: 'Mountains'
            })

            .state('woods', {
                url: '/woods',
                templateUrl: './states/woods.html',
                controller: 'BeachController',
                name: 'Woods'
            })

            .state('cities', {
                url: '/cities',
                templateUrl: './states/cities.html',
                controller: 'BeachController',
                name: 'Cities'
            })

            .state('map', {
                url: '/map/:id',
                templateUrl: './states/map.html',
                controller: 'MapController',
                name: 'Map'
            })

        $urlRouterProvider.otherwise("/");
    })
