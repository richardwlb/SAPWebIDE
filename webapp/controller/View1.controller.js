sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("workspace.testBackButton.controller.View1", {
		onInit: function () {

		},
		goToView2: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView2");
		}
	});
});