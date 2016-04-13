'use strict';

angular.module('pOSDesignPatternsExerciseApp')
    .factory('Tax', function ($resource, DateUtils) {
        return $resource('api/taxs/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
