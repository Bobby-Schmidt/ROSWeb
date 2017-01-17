#! /usr/env/bin python
'''
	This code snippet will create a catkin workspace based on parameters declared
		at beginning of program. This will later be used in POST request of ROSWeb

	Created:	1.14.17
	Author:		Bobby Schmidt
'''


import subprocess
import os


ws_name = "test_ws"
pkg_name = "test_pkg"

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

