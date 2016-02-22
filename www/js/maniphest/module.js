angular.module('app.maniphest', ['app.maniphest.controllers'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('tab.maniphest', {
                url: '/maniphest',
                views: {
                    'tab-maniphest': {
                        templateUrl: 'templates/maniphest/view.html',
                        controller: 'ManiphestCtrl'
                    }
                }
            })
    });
