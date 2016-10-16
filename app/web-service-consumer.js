/* A RESTful client that sends requests to the service producer */
function WebServiceConsumer(callback) {
	this.callback=callback;
}

WebServiceConsumer.prototype = {
	constructor: WebServiceConsumer,
	sendModuleRequest: function(moduleName, arguments) {
		arguments.module = moduleName;
		$.post("https://utslf.herokuapp.com/service-producer/RequestHandler.php", arguments, this.callback);
	}
};
