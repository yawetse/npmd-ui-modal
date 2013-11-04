'use strict';

var npmd_ui_model = require('../../index'),
	$ = require('npmd-jquery');

$(function(){
	var modal1 = npmd_ui_model({data:"data"})
	modal1.init();
});
