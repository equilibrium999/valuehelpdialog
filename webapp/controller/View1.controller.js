sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.com.valuehelp.controller.View1", {
		onValueHelpRequest: function (oEvent) {
			var oValueHelpDialog = sap.ui.jsfragment("demo.com.valuehelp.view.fragment.ValueHelpForSite", this);
			var oThis = this;
			if (!oValueHelpDialog.getTable().getModel("supplier")) {
				var oODataModel = new sap.ui.model.odata.ODataModel(
					"/Northwind/V2/Northwind/Northwind.svc/"
				);
				oODataModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None);
				oODataModel.attachRequestCompleted(function (oEve) {
					oThis.errProcValueHelpGetData(oValueHelpDialog, oEve);
				});
				oValueHelpDialog.getTable().setModel(
					oODataModel,
					"supplier"
				);
			}
			oValueHelpDialog.getTable().bindRows("supplier>/Suppliers");
			oValueHelpDialog.open();
		}
	});
});