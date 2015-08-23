'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('SubscribersCtrl', function ($scope, $http, $modal) {
 	$http.get('subscribers.json').then(function (response) {
 		$scope.subscribers = response.data;
 	});
 
 	$scope.gridOptions = {
 		data : 'subscribers',
 		showGroupPanel : true,
 		jqueryUIDraggable: true,
	    enableCellSelection: true,
	    enableRowSelection: false,
	    enableCellEdit: true,
 		columnDefs: [
        	{field:'no', displayName:'No.'}, 
        	{field:'name', displayName:'Name'}, 
        	{field:'userType', displayName:'Subscription Type'},
        	{field:'loyalty', displayName:'Loyalty Score'},
        	{field:'joinDate', displayName:'Date of Joining'}
        ]
 	};

 	$scope.showModal = function _showModal() {
    $scope.newUser = {};
    var modalInstance = $modal.open({
      templateUrl: 'views/add-user.html',
      controller: 'AddNewUserCtrl',
      resolve : {
        newUser : function() {
          return $scope.newUser;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.subscribers.push({
        no : $scope.subscribers.length + 1,
        name: selectedItem.name,
        userType: selectedItem.userType,
        loyalty : selectedItem.loyalty,
        joinDate: selectedItem.joinDate
      });
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
 	};
})
 .controller('AddNewUserCtrl', function ($scope, $modalInstance, newUser) {

    $scope.cancel = function _cancel() {
      $modalInstance.dismiss('cancel');
    };

    $scope.newUser = newUser;

    $scope.saveNewUser = function _saveNewUser() {
      $modalInstance.close(newUser);
    };

 });
