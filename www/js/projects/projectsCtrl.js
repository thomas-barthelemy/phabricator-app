angular.module('app.projects.controllers', [])

    .controller('ProjectsCtrl', function ($scope, ConduitService) {
        $scope.projects = [];

        ConduitService.callGetConduit('project.query')
            .then(function(response) {
                $scope.projects = Object.keys(response.data.result.data)
                    .map(function (key) {
                        return response.data.result.data[key]
                    });
                console.log($scope.projects);
            });
    });
