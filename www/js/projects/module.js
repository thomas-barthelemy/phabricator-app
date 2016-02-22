angular.module('app.projects', ['app.projects.controllers'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('tab.projects', {
                url: '/projects',
                views: {
                    'tab-projects': {
                        templateUrl: 'templates/projects/view.html',
                        controller: 'ProjectsCtrl'
                    }
                }
            })
    });
