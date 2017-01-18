# -*- coding: utf-8 -*-
# @Author: bobby
# @Date:   2017-01-16 11:05:51
# @Last Modified by:   Bobby-Schmidt
# @Last Modified time: 2017-01-18 00:31:33


from flask import Flask, render_template, request, redirect, url_for
from flask.ext.api import FlaskAPI, status, exceptions
from flask.ext.uploads import UploadSet, configure_uploads, SCRIPTS
import os, sys
import json
import subprocess


app = Flask(__name__)

scripts = UploadSet('scripts', SCRIPTS)

app.config['UPLOADED_SCRIPTS_DEST'] = 'static/temp'
configure_uploads(app, scripts)

# UPLOAD_FOLDER = 'Users/bobby/ROSWeb/upload_target'
# ALLOWED_EXTENSIONS = set(['py'])
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/index')
def index():
	return render_template('index.html')

@app.route('/management', methods = ['GET', 'POST'])
def management():
	if request.method == 'POST' and 'script' in request.files:
		# Insert code here
		filename = scripts.save(request.files['script'])
		return render_template('management.html')
		# print 'POST request received'


	return render_template('management.html')

@app.route('/monitoring')
def monitoring():
	return render_template('monitoring.html')

@app.route('/workspace-list', methods = ['GET'])
def api_workspaceList():
	path = "/home/bobby"

	dirs = os.listdir(path)

	catkin_ws_array = []

	#	Loops through directories in path
	for directory in dirs:

		#	Avoids files like .local, etc
		if directory[0] != ".":
			print "Directory: ", directory

			#	Creates path to directory to be searched
			temp_path = path + "/" + directory

			#	Checks if path leads to directory
			if os.path.isdir(temp_path):

				#	Gets directories in temp_path
				childDirectories = os.listdir(temp_path)

				#	Loops through directories in childDirectories
				#		searching for .catkin_workspace
				for grandChildDirectory in childDirectories:
					if grandChildDirectory == ".catkin_workspace":
						print "Found workspace"

						#	Adds directory name to array to be used later in WebApp
						catkin_ws_array.append(directory)
						break


	#	Logs discovered catkin_workspaces
	for ws in catkin_ws_array:
		print "Workspace: ", ws

	return json.dumps(catkin_ws_array)

@app.route('/create-workspace', methods = ['POST'])
def api_createWorkspace():
	event_data = request.get_json(force=True)

	ws_name = event_data["workspaceName"]

	ws_path = "/home/bobby/" + ws_name
	path_w_src = ws_path + "/src"
	# path_w_pkg = path_w_src + 

	if not os.path.isdir(ws_path):
		os.makedirs(path_w_src)
		cmd = "mkdir my_ws"
		a = subprocess.Popen(["catkin_init_workspace"], cwd=path_w_src, shell=True)
		a.wait()
		# a.kill()
		b = subprocess.Popen(["catkin_make"], cwd=ws_path, shell=True)
		b.wait()
		# b.kill()
		subprocess.Popen(["source", "devel/setup.bash"], cwd=ws_path, shell=True)
		# subprocess.Popen(["catkin_create_pkg " + pkg_name], cwd=path_w_src, shell=True)

	return json.dumps(event_data)



if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')