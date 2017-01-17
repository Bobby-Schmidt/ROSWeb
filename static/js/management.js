/*
* @Author: bobby
* @Date:   2017-01-17 11:41:07
* @Last Modified by:   Bobby-Schmidt
* @Last Modified time: 2017-01-17 12:10:10
*/

function populateWorkspaces() {
	console.log('populateWorkspaces');
}


function populatePackages() {
	console.log('populatePackages');

	var selectedWorkspaces = $('#selectWorkspaces').find("option:selected");

	console.log('selectedWorkspaces: ', selectedWorkspaces);

	// $.ajax({
	// 	type: "POST",
	// 	// url: "http://192.168.0.16:5000/players/list",
	// 	url: "http://127.0.0.1:5000/players/list",
	// 	// url: "http://10.10.55.18:5000/games/list",
	// 	data: JSON.stringify(trendRequestModel),
	// 	// "url": "http://192.168.1.14:5000/teams-list",
	// 	dataType: 'json',
	// 	success: function(response) {
	// 		var jsonData = response;
	// 		initPlot(jsonData);
	// 	},
	// 	failure: function() {
	// 		console.log('POST Failed');
	// 	}
	// });

}


function createWorkspace() {
	console.log('createWorkspace');

	var workspaceName = document.getElementById('wsName').value;
	console.log('workspaceName: ', workspaceName);

}


function createPackage() {
	console.log('createPackage');
}