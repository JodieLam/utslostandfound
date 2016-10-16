$(document).ready(init);
var self=null;
/* When page loads, initialise the view helper and controller */
function init() {
	self=new ViewLostItemController();
}

function ViewLostItemController() {
	this.view = new ViewLostItemViewHelper(this);
	this.currentLostItem = null;
	this.init();
}

ViewLostItemController.prototype = {
	constructor: ViewLostItemController,
	
	/* Initialise the controller */
	init: function() {
		this.loadLostItemDetails();
		
		if (getParameterByName("a") == "true"){
			$(".edit").text("NOTIFY");
		}
		
		$("#back").on('click', function() {
			self.exitView();
		});
	},
	loadLostItemDetails:function() {
		this.serviceConsumer = new WebServiceConsumer(this.onLostItemDataReceived);
		this.serviceConsumer.sendModuleRequest("ViewItem", {itemid:getParameterByName("id")});
	},
	onLostItemDataReceived:function(data) {
		var item = JSON.parse(data);
		self.currentLostItem = new LostItem(item.lostItemID, item.category, item.subcategory, item.colour, item.locationLost, item.dayLost, item.comment, item.status, item.archived);
		self.view.setLostItemInformation(self.currentLostItem);
	},
	onButtonClickedCallback:function() {
		var button = $(this).text().toLowerCase();
		if (button == "exit") {
			self.exitView();
		} else if (button == "edit") {
			self.editItem();
		} else if (button == "archive") {
			self.archiveItem();
		} else if (button == "notify") {
			self.notifyItem();
		}
	},
	archiveItem:function() {
		this.currentLostItem.archive();
		
		this.serviceConsumer = new WebServiceConsumer(null);
		this.serviceConsumer.sendModuleRequest("ArchiveItem",{itemid:this.currentLostItem.id});
		
		navigateToView("mylostitems");
	},
	notifyItem:function() {
		this.serviceConsumer = new WebServiceConsumer(function() {
			self.exitView();
		});
		this.serviceConsumer.sendModuleRequest("NotifyItem",{itemid:this.currentLostItem.id});
	},
	editItem:function() {
		navigateToView("editlostitem", this.currentLostItem.id);
	},
	exitView:function() {
		if (getParameterByName("a") == "true"){
			navigateToView("adminview");
		} else {
			navigateToView("mylostitems");
		}
	}
};