angular.module('app.maniphest', ['app.maniphest.controllers'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('tab.maniphest', {
                url: '/maniphest',
                views: {
                    'tab-maniphest': {
                        templateUrl: 'app/maniphest/view.html',
                        controller: 'ManiphestCtrl'
                    }
                }
            })
    });
