angular.module(
    'app',
    [
        'ionic',
        'app.login',
        'app.maniphest',
        'app.differential',
        'app.projects'
    ]
)
    .run(function ($ionicPlatform, $rootScope, $state, AuthService) {
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

        $rootScope.$on('$stateChangeStart', function (event, next) {
            if(!AuthService.isAuthenticated() && next.name !== 'login') {
                console.warn('No Token Found, going back to login');
                event.preventDefault();
                $state.go('login');
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: '/tab',
                "abstract": true,
                templateUrl: 'templates/tabs.html'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/maniphest');

    });
