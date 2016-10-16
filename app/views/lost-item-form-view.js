
/* Create a view helper that takes in the controller instance as a parameter */
function LostItemFormViewHelper(controller) {
	this.controller=controller;
}

LostItemFormViewHelper.prototype = {
	constructor: LostItemFormViewHelper,

	/* Intialise catgeories and click handlers for the view's drop down menu */
	initialiseCategories:function() {
		for (var i=0;i<categories.length;i++) {
			$("#category").append(new Option(categories[i], categories[i]));
		}

		var __this = this;
		$("#category").change(function() {
			$("#subcat").empty();
			__this.initialiseSubcategories();
		});
	},
	/* Intialise subcategories for the view's drop down menu */
	initialiseSubcategories:function() {
		$.each(subcats[$("#category")[0].selectedIndex], function (i, item) {
			$("#subcat").append(new Option(item, item));
		});
	},
	/* Intialise colours for the view's drop down menu */
	initialiseColours:function() {
		$.each(colours, function (i, item) {
			$("#colour").append(new Option(item, item));
		});
	},
	/* Intialise locations for the view's drop down menu */
	initialiseLocations:function() {
		$.each(locations, function (i, item) {
			$("#location").append(new Option(item, item));
		});
	}
};

// Static 	
// Create an array of dynamic categories, colours and locations to use in the view
var categories = ["Cards",
				"Electronics",
				"Personal Accessories",
				"Clothing",
				"Miscellaneous",
				"Medical",
				"Sporting goods",
				"Musical Instruments"];
var subcats = [["Identification", "Travel", "Bank"],
				["Mobile Phone", "Laptop", "Tablets", "Camera", "Music player", "USB", "External hard drive", "Charger", "Headphones"],
				["Wallet", "Purses", "Jewellery", "Glasses", "Sunglasses", "Keys", "Bag", "Luggage", "Towel", "Umbrella"],
				["Shirt", "Pants", "Underwear", "Shoes", "Socks", "Jacket", "Dress", "Skirt", "Swimwear", "Onesie", "Sleepwear", "Raincoat"],
				["Book", "Textbook", "Currency", "Mail", "Parcel", "Toy", "Household tools"],
				["Medicine", "Epipen", "Inhaler", "Stethoscope"],
				["Ball", "Bat", "Net", "Hoops", "Bicycle"],
				["Violin", "Flute", "Clarinet", "Piano", "Saxophone", "Percussion", "Keyboard", "Guitar", "Trumpet", "Trombone", "Harmonica", "Accordion", "Kazoo", "Vuvuzela", "Harp", "Cello", "Viola", "French Horn", "Recorder", "Double Bass", "Wintergatan"]];

var colours = ["White", "Black", "Grey", "Red", "Green", "Blue", "Yellow", "Pink", "Teal", "Orange", "Brown", "Silver", "Gold", "Rose Gold", "Space Grey"];

var locations = ["UTS Library", "Central Park", "Building 1", "Building 2", "Building 3", "Building 4", "Building 5", "Building 6", "Building 7", "Building 8", "Building 10", "Building 11"];