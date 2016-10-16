$(document).ready(init);
var self=null;
/* When page loads, initialise the controller */
function init() {
	self=new AdminController();
}

/* Controller class constructor, initialise view helper and  setup data */
function AdminController() {
	this.view = new AdminViewHelper(this);
	this.allLostItems = {};
	this.init();
}

/* Controller class declarations */
AdminController.prototype = {
	constructor: AdminController,
	
	/* Initialise the controller */
	init: function() {
		this.loadAllClaims();
	},
	loadAllClaims:function() {
		this.serviceConsumer = new WebServiceConsumer(this.onItemsDataReceived);
		this.serviceConsumer.sendModuleRequest("ListAll",{});
	},
	onItemsDataReceived:function(data) {
		var itemData = JSON.parse(data);
		
		for (var i=0;i<itemData.length; i++) {
			var item=itemData[i];
			if (item.archived == 1) {
				continue;
			}
			var lostItemModel = new LostItem(item.lostItemID, item.category, item.subcategory, item.colour, item.locationLost, item.dayLost, item.comment, item.status, item.archived);
			self.allLostItems[lostItemModel.id] = lostItemModel;
		}
		self.populateItems();
	},
	onButtonClickedCallback: function(event) {
		var button = $(this).text().toLowerCase();
		var selectedItem = self.allLostItems[event.data.itemID];
		//alert(self.lostItems[event.data.itemID]);
		if (button == "view") {
			self.viewItem(selectedItem);
		} else if (button == "notify") {
			self.notifyReceivedItem(selectedItem);
		} else if (button == "archive") {
			self.archiveItem(selectedItem);
		}
	},
	populateItems: function() {
		for (var itemModel in this.allLostItems) {
			if (this.allLostItems[itemModel].archived==1) {
				continue;
			}
			self.view.addLostItemToView(this.allLostItems[itemModel]);
		}
	},
	viewItem:function(item) {
		navigateToView("viewlostitem", item.id, true);
	},
	notifyReceivedItem:function(item) {
		this.allLostItems[item.id].status = 1;
		this.serviceConsumer = new WebServiceConsumer(function() {
			self.view.clearItems();
			self.populateItems();
		});
		this.serviceConsumer.sendModuleRequest("NotifyItem",{itemid:item.id});
	},
	archiveItem:function(item) {
		item.archive();
		
		this.serviceConsumer = new WebServiceConsumer(null);
		this.serviceConsumer.sendModuleRequest("ArchiveItem",{itemid:item.id});
		
		this.view.clearItems();
		this.populateItems();
	}
};