
/* Create a view helper that takes in the controller instance as a parameter */
function ViewLostItemViewHelper(controller) {
	this.controller=controller;
}

ViewLostItemViewHelper.prototype = {
	constructor: ViewLostItemViewHelper,

	/* Sets the view's information to the passed lostItem model. Requires a "LostItem" object/model to be passed */
	setLostItemInformation: function(lostItem) {
		var itemCard = $(".viewItemCard");

		// Set details of the card with the ones from the lostItem object
		$(itemCard).find(".desc").text(lostItem.category + " ("+lostItem.subcategory+")");
		$(itemCard).find(".datelost").text(lostItem.dateLost);
		$(itemCard).find(".status").html("<font color='"+(lostItem.status == 0 ? "orange" : "green")+"'><b>"+lostItem.getStatusText()+"</b></font>");
		$(itemCard).find(".category").text(lostItem.category);
		$(itemCard).find(".colour").text(lostItem.colour);
		$(itemCard).find(".locationlost").text(lostItem.locationLost);
		$(itemCard).find(".comment").text(lostItem.comment);

		// Add click listeners linked to controller
		this.addClickListeners(itemCard);
	},
	addClickListeners:function(view) {
		$(view).find("button").on("click", this.controller.onButtonClickedCallback);
	},
};