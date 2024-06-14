/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

(function () {
   'use strict';

   angular.module('A1app', [])
           .controller('A1Controller', A1Controller);

   A1Controller.$inject = ['$scope', '$filter'];
   function A1Controller($scope) {
       $scope.dishes = "";
       $scope.message = "";
       $scope.color='blue';
       $scope.a1Click = function () {
           if ($scope.dishes.length === 0) {
               $scope.message = "Please enter data first!";
               $scope.color='red';

           } else {
               $scope.color='purple';
               var i=0; var n=0;
               var dd=$scope.dishes.split(',');
               dd.forEach((function(value){
                   if (value.trim().length>0){i++;}
                   else {n++;}
               }));
               if(i<4){$scope.msg = "Enjoy The Food!";}
               else{$scope.msg = "Too much!";}
           }

           if(n){$scope.msg+= ' ('+n+' empty dishe(s`) name(s) entered!)';}
       };
   }
})();
