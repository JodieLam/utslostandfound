// Navigate to a different view programatically
function navigateToView(page, id, admin) {
	if (id == null || id == undefined) {
		location.assign(page+".php"+(admin?"?a=true":""));
	} else {
		location.assign(page + ".php" + "?id="+id+(admin?"&a=true":""));
	}
}

function getParameterByName(name, url) {
	if (!url)
		url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results)
		return null;
	if (!results[2])
		return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}