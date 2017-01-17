#! /usr/bin/env python

'''
	This code snippet will retrieve a list of directories relevant to ROS. 

	Created:	1.14.17
	Author:		Bobby Schmidt

'''


import os, sys

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

