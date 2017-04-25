angular.module('app', ['ionic', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('form', {
                url: '/',
                templateUrl: 'states/form.html',
                name: 'Form'
            })
            .state('walks', {
                url: '/walks',
                templateUrl: './states/walks.html',              
                name: 'Walks'
            })
            .state('walks.parks', {
                url: '/parks',
                templateUrl: './states/parks.html',
                controller: 'MainController',
                name: 'Parks'
            })
            .state('walks.beaches', {
                url: '/beaches',
                templateUrl: './states/beaches.html',
                controller: 'MainController',
                name: 'Beaches'
            })
            .state('walks.mountains', {
                url: '/mountains',
                templateUrl: './states/mountains.html',
                controller: 'MainController',
                name: 'Mountains'
            })
            .state('walks.woods', {
                url: '/woods',
                templateUrl: './states/woods.html',
                controller: 'MainController',
                name: 'Woods'
            })
            .state('walks.cities', {
                url: '/cities',
                templateUrl: './states/cities.html',
                controller: 'MainController',
                name: 'Cities'
            })
            .state('walks.map', {
                url: '/map/:id',
                templateUrl: './states/map.html',
                controller: 'MapController',
                name: 'Map'
            })
            .state('walks.profile', {
                url: '/profile',
                templateUrl: './states/profile.html',
                controller: 'MainController',
                name: 'Profile'
            })
            .state('walks.liked', {
                url: '/liked',
                templateUrl: './states/liked.html',
                controller: 'MainController',
                name: 'liked'
            })

        $urlRouterProvider.otherwise("/");
    })
