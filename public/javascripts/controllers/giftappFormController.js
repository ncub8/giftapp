angular.module('giftappControllers')
    .controller('GiftappFormController', ['$scope','$http', function($scope,$http) {
        $scope.formData = {};
        $scope.formData.items = [];


        $scope.create = function() {
            console.log("create");
            $http({
                method  : 'POST',
                url     : '/giftlist',
                data    : $.param($scope.formData),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
                .success(function(data) {
                    console.log(data);

                    if (!data.success) {
                        // if not successful, bind errors to error variables
                        $scope.errorName = data.errors.name;

                    } else {
                        // if successful, bind success message to message
                        $scope.message = data.message;
                    }
                });
        };


    }]);
