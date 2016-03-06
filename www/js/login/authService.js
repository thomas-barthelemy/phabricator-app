angular.module('app.login.services', [])

    .service('AuthService', function () {
        var authStorage = {
            url: undefined,
            token: undefined
        };

        var authService = {};

        authService.getStorage = function () {
            if(authStorage.url && authStorage.token) {
                return authStorage;
            }

            var token = window.localStorage.getItem('token');
            if(token) {
                authStorage.token = token;
            }

            var url = window.localStorage.getItem('url');
            if(url) {
                authStorage.url = url;
            }

            return authStorage;
        };

        authService.isAuthenticated = function () {
            authService.getStorage();
            return authStorage.url && authStorage.token;
        };

        authService.setToken = function(token) {
            authStorage.token = token;
            window.localStorage.setItem('token', token);
        };

        authService.setUrl = function(url) {
            authStorage.url = url;
            window.localStorage.setItem('url', url);
        };

        return authService;
    });
