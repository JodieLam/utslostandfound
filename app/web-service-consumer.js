/* A RESTful client that sends requests to the service producer */
function WebServiceConsumer(callback) {
	this.callback=callback;
}

WebServiceConsumer.prototype = {
	constructor: WebServiceConsumer,
	sendModuleRequest: function(moduleName, arguments) {
		arguments.module = moduleName;
		$.post("http://localhost/service-producer/RequestHandler.php", arguments, this.callback);
	}
};