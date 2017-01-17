/*
* @Author: bobby
* @Date:   2017-01-17 11:41:07
* @Last Modified by:   Bobby-Schmidt
* @Last Modified time: 2017-01-17 12:10:10
*/

function populateWorkspaces() {
	console.log('populateWorkspaces');

	workspaceSelect = document.getElementById('selectWorkspaces');

	// Clears options prior to population; avoids duplicates
	workspaceSelect.options.length = 0;

	$.ajax({
		url: "http://127.0.0.1:5000/workspace-list",
		type: "GET",
		// data: JSON.stringify(trendRequestModel),
		dataType: 'json',
		success: function(response) {
			var jsonData = response;
			// initPlot(jsonData);
			console.log('jsonData: ', jsonData);

			for (var i = 0; i < jsonData.length; i++) {
				// console.log(jsonData[i]);
				workspaceSelect.innerHTML += "<option>" + jsonData[i] + "</option>"

			}

		},
		failure: function() {
			console.log('GET Failed');
		}
	});
}


function populatePackages() {
	console.log('populatePackages');

	var selectedWorkspaces = $('#selectWorkspaces').find("option:selected");

	console.log('selectedWorkspaces: ', selectedWorkspaces);



}


function createWorkspace() {
	console.log('createWorkspace');

	var newWorkspace = document.getElementById('wsName').value;

	var workspaceNameJson = {
		workspaceName: newWorkspace
	}

	$.ajax({
		url: "http://127.0.0.1:5000/create-workspace",
		type: "POST",
		data: JSON.stringify(workspaceNameJson),
		dataType: 'json',
		success: function(response) {
			// var jsonData = response;
			console.log('success');
			populateWorkspaces();
		},
		failure: function() {
			console.log('failure');
		}
	});

	console.log('workspaceName: ', newWorkspace);

}


function createPackage() {
	console.log('createPackage');
}