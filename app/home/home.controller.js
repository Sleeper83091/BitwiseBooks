(function(){
    "use strict";

    var app = angular.module('bitwiseBooks');

    app.controller('HomeController', function($scope){
        $scope.welcome = 'welcome to Bitwise Books';
    })

}());