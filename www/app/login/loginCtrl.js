angular.module('app.login.controllers', [])

    .controller('LoginCtrl', function ($scope, $state, AuthService) {

        if(AuthService.isAuthenticated()) {
            $state.go('tab.maniphest');
        }

        $scope.data = AuthService.getStorage();

        $scope.login = function () {
            AuthService.setUrl($scope.data.url);
            AuthService.setToken($scope.data.token);

            if(AuthService.isAuthenticated()) {
                $state.go('tab.maniphest');
            }
        }
    });
