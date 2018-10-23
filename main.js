define(function() {
	"use strict";
	return {
		load_ipython_extension: function () {
			requirejs(['nbextensions/form_mode/form'], function () {
			});
		}
	};
});
