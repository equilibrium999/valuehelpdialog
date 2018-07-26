sap.ui.jsfragment("demo.com.valuehelp.view.fragment.ValueHelpForSite", {
	createContent: function (oController) {
		var oValueHelpDialog = new sap.ui.comp.valuehelpdialog.ValueHelpDialog({
			title: "Hello",
			supportMultiselect: false,
			supportRanges: false,
			supportRangesOnly: false,
			key: "",
			descriptionKey: "",
			ok: function (oControlEvent) {
				// oController.setDefaultSiteFromHelp(oControlEvent);
				oValueHelpDialog.close();
			},
			cancel: function (oControlEvent) {
				oValueHelpDialog.close();
			},
			afterClose: function () {
				oValueHelpDialog.destroy();
			}
		});

		var oThis = this;
		var oSearchField = new sap.m.SearchField({
			showSearchButton: sap.ui.Device.system.phone,
			placeholder: "search",
			showRefreshButton: true,
			liveChange: function (oSearchEvent) {
				oThis.onLiveSearchForSite(oSearchEvent, oController, oValueHelpDialog);
			}
		});

		var oColModel = new sap.ui.model.json.JSONModel();
		var aCols = this.createColumns(oController);
		oColModel.setData({
			cols: aCols
		});
		if (sap.ui.Device.system.phone) {
			oColModel.getData().cols.pop();
			oColModel.getData().cols.pop();
		}
		oValueHelpDialog.getTable().setModel(oColModel, "columns");

		oValueHelpDialog.insertContent(oSearchField);
		oValueHelpDialog.addStyleClass("sapUiSizeCompact");

		return oValueHelpDialog;
	},
	createColumns: function (oController) {
		return [{
			label: "Supplier ID",
			template: "supplier>SupplierID",
			demandPopin: true
		}, {
			label: "Company Name",
			template: "supplier>CompanyName",
			demandPopin: true
		}];
	},
	onLiveSearchForSite: function (oSearchEvent, oController, oValueHelpDialog) {
		var sQuery = oSearchEvent.getSource().getValue();
		sQuery = sQuery.toUpperCase();

		var oBinding = oValueHelpDialog.getTable().getBinding("rows");

		// var aFilter = this.createFilter(sQuery, oController);
		// oBinding.filter(aFilter, sap.ui.model.FilterType.Application);
	},
	// createFilter: function (sQuery, oController) {
	// 	return [
	// 		new sap.ui.model.Filter(
	// 			oController.getStrWERKS(),
	// 			sap.ui.model.FilterOperator.Contains,
	// 			sQuery
	// 		),
	// 		new sap.ui.model.Filter(
	// 			oController.getStrNAME1(),
	// 			sap.ui.model.FilterOperator.Contains,
	// 			sQuery
	// 		)
	// 	];
	// }
});