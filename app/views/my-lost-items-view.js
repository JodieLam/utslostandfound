
/* Create a view helper that takes in the controller instance as a parameter */
function MyLostItemsViewHelper(controller) {
	this.controller=controller;
}

MyLostItemsViewHelper.prototype = {
	constructor: MyLostItemsViewHelper,

	/* Adds a lost item to the view. Requires a "LostItem" object/model to be passed */
	addLostItemToView: function(lostItem) {
		var itemCard = $(".lostitemcard").eq(0).clone().removeClass("hidden").addClass("card");

		// Set details of the card with the ones from the lostItem model
		$(itemCard).find(".category").text(lostItem.category + " ("+lostItem.subcategory+")");
		$(itemCard).find(".datelost").text(lostItem.dateLost);
		$(itemCard).find(".status").html("<font color='"+(lostItem.status == 0 ? "orange" : "green")+"'>"+lostItem.getStatusText()+"</font>");

		// Add click event listeners that are linked to the controller
		this.addClickListeners(itemCard, lostItem);

		// Add the new card to the main div
		this.prependItemToView(itemCard);
	},
	clearItems:function() {
		$(".card").remove();
	},
	addClickListeners:function(view, lostItem) {
		$(view).find("button").on("click", {itemID:lostItem.id}, this.controller.onButtonClickedCallback);
	},
	prependItemToView(item) {
		$(".main").prepend(item);
	}
};