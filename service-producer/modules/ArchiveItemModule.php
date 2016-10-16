<?php
require_once("././IModule.php");
require_once("././db.php");

class ArchiveItemModule implements IModule {

	private $data;
	private $db;
	
	public function executeWithArguments($args) {
		$this->db = new db();
		$result = $this->db->execQuery("UPDATE claims SET claims.archived = 1 WHERE claims.lostItemID = '".$args['itemid']."'");
		$this->data=array("status" => "0");
	}

	public function getRawData() {
		return $this->data;
	}

	public function getModuleName() {
		return "ArchiveItem";
	}
}
?>