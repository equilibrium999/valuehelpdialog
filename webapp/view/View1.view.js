sap.ui.jsview("demo.com.valuehelp.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View1
	 */
	getControllerName: function () {
		return "demo.com.valuehelp.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View1
	 */
	createContent: function (oController) {
		var oSimpleForm = new sap.ui.layout.form.SimpleForm({
			id: "idMainViewSimpleForm",
			title: new sap.ui.core.Title({
				id: "idMainViewSimpleFormTitle",
				text: "Example"
			}),
			layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
			content: [
				new sap.ui.commons.Label({
					id: "idMainViewSimpleFormLabelCountry",
					text: "Supplier"
				}),
				new sap.m.MultiInput({
					id: "idMainViewSimpleFormMultiInputCountry",
					valueHelpRequest: [oController.onValueHelpRequest, oController]
				})
			]
		});

		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [oSimpleForm]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}
});