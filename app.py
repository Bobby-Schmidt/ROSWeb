# -*- coding: utf-8 -*-
# @Author: bobby
# @Date:   2017-01-16 11:05:51
# @Last Modified by:   bobby
# @Last Modified time: 2017-01-16 21:15:20


from flask import Flask, render_template, request, url_for
from flask.ext.api import FlaskAPI, status, exceptions

app = Flask(__name__)

@app.route('/index')
def index():
	return render_template('index.html')

@app.route('/management')
def management():
	return render_template('management.html')

@app.route('/monitoring')
def monitoring():
	return render_template('monitoring.html')





if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')