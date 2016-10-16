<?php
require_once("././IModule.php");
require_once("././db.php");

class ListAllModule implements IModule {
	private $data;
	private $db;
	
	public function executeWithArguments($args) {
		
		$this->db = new db();
		$result = $this->db->execQuery("SELECT * FROM lostitems, claims WHERE claims.lostItemID = lostitems.lostItemID ORDER BY claims.claimID ASC");
		$itemArray = array();
		while($row = $result->fetch_assoc()){
			$itemArray[] = $row;
		}
		$this->data = $itemArray;
	}

	public function getRawData() {
		return $this->data;
	}

	public function getModuleName() {
		return "ListAll";
	}
}

?>