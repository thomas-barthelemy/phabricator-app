angular.module('app.conduit.services', [])

    .service('ConduitService', function ($http, AuthService) {
        var conduitService = {};
        var getConduitUrl = function ($conduitMethod) {
            return AuthService.getStorage().url +
                '/api/' +
                $conduitMethod;
        };
        conduitService.callGetConduit = function ($conduitMethod) {
            return $http.get(
                getConduitUrl($conduitMethod),
                {
                    params: {
                        'api.token': AuthService.getStorage().token
                    }
                }
            );
        };

        return conduitService;
    });
