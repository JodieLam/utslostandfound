$(document).ready(init);
var self = null;

/* When page loads, initialise the controller */
function init() {
	self=new MyLostItemsController();
}

/* Controller class constructor, initialise view helper and  setup data */
function MyLostItemsController() {
	this.view = new MyLostItemsViewHelper(this);
	this.lostItems = {};
	this.init();
}

/* Controller class declarations */
MyLostItemsController.prototype = {
	constructor: MyLostItemsController,
	
	/* Initialise the controller */
	init: function() {
		this.loadAllItems();
	},
	loadAllItems:function() {
		this.serviceConsumer = new WebServiceConsumer(this.onItemsDataReceived);
		this.serviceConsumer.sendModuleRequest("ListItems",{});
	},
	onItemsDataReceived:function(data) {
		var itemData = JSON.parse(data);
		
		for (var i=0;i<itemData.length; i++) {
			var item=itemData[i];
			if (item.archived == 1) {
				continue;
			}
			var lostItemModel = new LostItem(item.lostItemID, item.category, item.subcategory, item.colour, item.locationLost, item.dayLost, item.comment, item.status, item.archived);
			self.lostItems[lostItemModel.id] = lostItemModel;
		}
		self.populateItems();
	},
	onButtonClickedCallback: function(event) {
		var button = $(this).text().toLowerCase();
		var selectedItem = self.lostItems[event.data.itemID];
		//alert(self.lostItems[event.data.itemID]);
		if (button == "view") {
			self.viewItem(selectedItem);
		} else if (button == "edit") {
			self.editItem(selectedItem);
		} else if (button == "archive") {
			self.archiveItem(selectedItem);
		}
	},
	populateItems: function() {
		for (var itemModel in this.lostItems) {
			if (this.lostItems[itemModel].archived==1) {
				continue;
			}
			self.view.addLostItemToView(this.lostItems[itemModel]);
		}
	},
	viewItem:function(item) {
		navigateToView("viewlostitem", item.id);
	},
	editItem:function(item) {
		navigateToView("editlostitem", item.id);
	},
	archiveItem:function(item) {
		item.archive();
		
		this.serviceConsumer = new WebServiceConsumer(null);
		this.serviceConsumer.sendModuleRequest("ArchiveItem",{itemid:item.id});
		
		this.view.clearItems();
		this.populateItems();
	}
};