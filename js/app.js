angular.module('app', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            
            .state('form', {
                url: '/',
                templateUrl: 'states/form.html',
                controller: 'MainController',
                name: 'Form'
            })

            .state('parks', {
                url: '/parks',
                templateUrl: './states/parks.html',
                controller: 'MainController',
                name: 'Parks'
            })

            .state('beaches', {
                url: '/beaches',
                templateUrl: './states/beaches.html',
                controller: 'MainController',
                name: 'Beaches'
            })

            .state('mountains', {
                url: '/mountains',
                templateUrl: './states/mountains.html',
                controller: 'MainController',
                name: 'Mountains'
            })

            .state('woods', {
                url: '/woods',
                templateUrl: './states/woods.html',
                controller: 'MainController',
                name: 'Woods'
            })

            .state('cities', {
                url: '/cities',
                templateUrl: './states/cities.html',
                controller: 'MainController',
                name: 'Cities'
            })

            .state('walks', {
                url: '/walks',
                templateUrl: './states/walks.html',
                controller: 'MainController',
                name: 'Walks'
            })

            .state('map', {
                url: '/map/:id',
                templateUrl: './states/map.html',
                controller: 'MapController',
                name: 'Map'
            })

        $urlRouterProvider.otherwise("/");
    })
