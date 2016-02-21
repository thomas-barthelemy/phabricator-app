angular.module(
    'app',
    [
        'ionic',
        'app.maniphest.controllers',
        'app.differential.controllers',
        'app.projects.controllers'
    ]
)
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: '/tab',
                "abstract": true,
                templateUrl: 'templates/tabs.html'
            })

            .state('tab.maniphest', {
                url: '/maniphest',
                views: {
                    'tab-maniphest': {
                        templateUrl: 'templates/maniphest/view.html',
                        controller: 'ManiphestCtrl'
                    }
                }
            })

            .state('tab.differential', {
                url: '/differential',
                views: {
                    'tab-differential': {
                        templateUrl: 'templates/differential/view.html',
                        controller: 'DifferentialCtrl'
                    }
                }
            })

            .state('tab.projects', {
                url: '/projects',
                views: {
                    'tab-projects': {
                        templateUrl: 'templates/projects/view.html',
                        controller: 'ProjectsCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/maniphest');

    });
