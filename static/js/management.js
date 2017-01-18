/*
* @Author: bobby
* @Date:   2017-01-17 11:41:07
* @Last Modified by:   Bobby-Schmidt
* @Last Modified time: 2017-01-18 00:08:58
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

function pythonUpload() {
	console.log('pythonUpload');


	

	// $.ajax({
	// 	url: "http://127.0.0.1:5000/py-upload",
	// 	type: "POST",
	// 	// data: JSON.stringify(workspaceNameJson),
	// 	dataType: 'json',
	// 	success: function(response) {
	// 		// var jsonData = response;
	// 		console.log('success');
	// 		// populateWorkspaces();
	// 	},
	// 	failure: function() {
	// 		console.log('failure');
	// 	}
	// });

}

// $(function() {
	// $('#inputFile').on('change', ':file', function() {
	// 	console.log('file change');
	// 	var input = $(this),
	// 	    numFiles = input.get(0).files ? input.get(0).files.length : 1,
	// 	    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	// 	input.trigger('fileselect', [numFiles, label]);
	// });
// })

