angular.module(
    'app.login',
    [
        'app.login.controllers',
        'app.login.services'
    ]
)
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    '': {
                        templateUrl: 'templates/login/view.html',
                        controller: 'LoginCtrl'
                    }
                }
            })
    });
