<?php
require_once("IModule.php");
include("modules/ViewItemModule.php");
include("modules/EditItemModule.php");
include("modules/CreateItemModule.php");
include("modules/ListAllModule.php");
include("modules/ListItemsModule.php");
include("modules/NotifyItemsModule.php");
include("modules/ArchiveItemModule.php");

class ModuleRequestHandler {
	private $modules;
	
	public function initModules() {
		//initiate all modules into this array
		$this->modules=array(new ViewItemModule(), new CreateItemModule(), new EditItemModule(), new ListAllModule(), new ListItemsModule(), new NotifyItemsModule(), new ArchiveItemModule());
	}
	
	public function getModuleWithName($modulename) {
		foreach ($this->modules as $module) {
			if ($module->getModuleName() == $modulename) {
				return $module;
			}
		}
		return NULL;
	}
}