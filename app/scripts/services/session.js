'use strict';

angular.module('happinessApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
