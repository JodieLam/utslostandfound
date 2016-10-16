/* Constructor for the LostItem entity/class. Defines all properties of a lost item including its category, colour, location and the date it was lost. */

function LostItem(id, category, subcategory, colour, locationLost, dateLost, comment, status, archived) {
	this.id=id;
	this.category=category;
	this.subcategory=subcategory;
	this.colour=colour;
	this.locationLost=locationLost;
	this.dateLost=dateLost;
	this.comment=comment;
	this.status=status;
	this.archived = archived;
}

LostItem.prototype = {
	constructor:LostItem,

	getStatusText:function() {
		if (this.status == 0) {
			return "Pending review";
		} else {
			return "Pickup from Building 1";
		}
	},
	archive:function() {
		this.archived=true;
		this.notify("delete");
	},
	
	attach: function(observer) {
		this.observer=observer;
	},
	notify: function(event) {
		if (this.observer == undefined) {
			return;
		}
		this.observer(this, event);
	}
};