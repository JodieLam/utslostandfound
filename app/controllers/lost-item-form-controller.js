$(document).ready(init);
var self=null;
/* When page loads, initialise the view helper and controller */
function init() {
	self=new LostItemFormController();
}

function LostItemFormController() {
	this.view = new LostItemFormViewHelper(this);
	this.init();
}

LostItemFormController.prototype = {
	constructor: LostItemFormController,
	
	/* Initialise the controller */
	init: function() {
		this.view.initialiseCategories();
		this.view.initialiseSubcategories();
		this.view.initialiseColours();
		this.view.initialiseLocations();
		
		$("#btn").on('click', this.onSubmitClicked);
		
		var local = new Date();
		local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
		 $('#lostdate').val(local.toJSON().slice(0,10));
	},
	createLostItemClaim:function() {
		this.serviceConsumer = new WebServiceConsumer(function() {
			navigateToView("mylostitems");
		});
		var catg = $("#category").val();
		var subcat = $("#subcat").val();
		var colour = $("#colour").val();
		var date = $("#lostdate").val();
		var location = $("#location").val();
		var comment = $("#comments").val();
		this.serviceConsumer.sendModuleRequest("CreateItem", {category:catg, subcat:subcat, colour:colour, lostdate:date, location:location, comment:comment});
	},
	onSubmitClicked:function() {
		self.createLostItemClaim();
	}
};