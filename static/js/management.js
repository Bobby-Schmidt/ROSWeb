/*
* @Author: bobby
* @Date:   2017-01-17 11:41:07
* @Last Modified by:   Bobby-Schmidt
* @Last Modified time: 2017-01-17 11:57:56
*/

function populateWorkspaces() {
	console.log('populateWorkspaces');
}


function populatePackages() {
	console.log('populatePackages');

	var selectedWorkspaces = $('#selectWorkspaces').find("option:selected");

	console.log('selectedWorkspaces: ', selectedWorkspaces);
}


function createWorkspace() {
	console.log('createWorkspace');

	var workspaceName = document.getElementById('wsName').value;
	console.log('workspaceName: ', workspaceName);

}


function createPackage() {
	console.log('createPackage');
}