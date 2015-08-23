'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('SubscribersCtrl', function ($scope, $http) {
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

 	};
  });
