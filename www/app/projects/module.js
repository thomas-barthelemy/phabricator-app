angular.module(
    'app.projects',
    [
        'app.projects.controllers',
        'app.projects.details.controllers'
    ]
)

    .config(function ($stateProvider) {
        $stateProvider
            .state('tab.projects', {
                url: '/projects',
                views: {
                    'tab-projects': {
                        templateUrl: 'app/projects/view.html',
                        controller: 'ProjectsCtrl'
                    }
                }
            })
            .state('tab.project-details', {
                url: '/projects/:id',
                views: {
                    'tab-projects': {
                        templateUrl: 'app/projects/details.html',
                        controller: 'ProjectDetailsCtrl'
                    }
                },
                params: {
                    project: null
                }
            });
    });
