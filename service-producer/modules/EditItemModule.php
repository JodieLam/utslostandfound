<?php
require_once("././IModule.php");
require_once("././db.php");

class EditItemModule implements IModule {

	private $data;
	private $db;
	
	public function executeWithArguments($args) {
		
		$this->db = new db();
		$result = $this->db->execQuery("UPDATE lostitems SET category = '".$args['category']. "', subcategory = '".$args['subcategory']."', colour = '" .$args['colour']. "', dayLost = '" .$args['dayLost']. "', locationLost = '" .$args['locationLost']. "', comment = '" .$args['comment']. "' WHERE lostItemID = '".$args['itemid']."'");
		$this->data=array("status"=>"0");
	}

	public function getRawData() {
		return $this->data;
	}

	public function getModuleName() {
		return "EditItem";
	}
}

?>