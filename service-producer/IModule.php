<?php
interface IModule {
	public function executeWithArguments($args); // for modules that need data from $_POST use this
	public function getRawData(); // return the data that is saved inside the class
	public function getModuleName(); // return the string of the mdoule's name
}
?>