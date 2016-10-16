$(document).ready(init);
var self=null;
/* When page loads, initialise the view helper and controller */
function init() {
	self=new EditLostItemFormController();
}

function EditLostItemFormController() {
	this.view = new LostItemFormViewHelper(this);
	this.selectedLostItem=null;
	this.init();
}

EditLostItemFormController.prototype = {
	constructor: EditLostItemFormController,
	
	/* Initialise the controller */
	init: function() {
		this.view.initialiseCategories();
		this.view.initialiseSubcategories();
		this.view.initialiseColours();
		this.view.initialiseLocations();
		
		this.serviceConsumer = new WebServiceConsumer(function(data) {
			var item = JSON.parse(data);
			self.selectedLostItem = new LostItem(item.lostItemID, item.category, item.subcategory, item.colour, item.locationLost, item.dayLost, item.comment, item.status, item.archived);
			$("#category").val(self.selectedLostItem.category);
			self.view.initialiseSubcategories();
			$("#subcat").val(self.selectedLostItem.subcategory);
			$("#colour").val(self.selectedLostItem.colour);
			$("#lostdate").val(item.dayLost);
			$("#location").val(item.locationLost);
			$("#comments").val(self.selectedLostItem.comment);
		});
		this.serviceConsumer.sendModuleRequest("ViewItem", {itemid:getParameterByName("id")});
		
		$("#btn").on('click', this.onSubmitClicked);
	},
	updateLostItemClaim:function() {
		this.serviceConsumer = new WebServiceConsumer(function() {
			navigateToView("mylostitems");
		});
		var catg = $("#category").val();
		var subcat = $("#subcat").val();
		var colour = $("#colour").val();
		var date = $("#lostdate").val();
		var location = $("#location").val();
		var comment = $("#comments").val();
		this.serviceConsumer.sendModuleRequest("EditItem", {itemid: self.selectedLostItem.id, category:catg, subcategory:subcat, colour:colour, dayLost:date, locationLost:location, comment:comment});
	},
	onSubmitClicked:function() {
		self.updateLostItemClaim();
	}
};