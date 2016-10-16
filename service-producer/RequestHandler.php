<?php
require_once("ModuleRequestHandler.php");
session_start();

$moduleRequested = $_POST['module'];

executeModule($moduleRequested, $_POST);

function executeModule($moduleRequested, $args) {
	$reqHandler = new ModuleRequestHandler();
	$reqHandler->initModules();
	$moduleClass = $reqHandler->getModuleWithName($moduleRequested);
	if ($moduleClass == NULL) {
		// module does not exist, echo a json error: {error:1}
		return;
	}
	$moduleClass->executeWithArguments($args);
	$moduleData = $moduleClass->getRawData();
	echo json_encode($moduleData);
}

?>