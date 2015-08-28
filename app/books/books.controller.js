(function(){
    'use strict';

    var app = angular.module('bitwiseBooks');

    app.controller('BooksController', function($scope, BooksService){
        $scope.books = BooksService.books;
    })
}());