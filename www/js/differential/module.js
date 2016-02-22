angular.module('app.differential', ['app.differential.controllers'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('tab.differential', {
                url: '/differential',
                views: {
                    'tab-differential': {
                        templateUrl: 'templates/differential/view.html',
                        controller: 'DifferentialCtrl'
                    }
                }
            })
    });
