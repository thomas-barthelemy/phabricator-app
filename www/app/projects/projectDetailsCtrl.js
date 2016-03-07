angular.module('app.projects.details.controllers', [])

    .controller(
        'ProjectDetailsCtrl',
        function ($scope, $stateParams) {
            if($stateParams.project) {
               $scope.project = $stateParams.project
            } else {
                // TODO Request from id
                $scope.project = {
                    name: 'Details'
                };
            }
        });
