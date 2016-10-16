<?php
require_once("././IModule.php");
require_once("././db.php");

class ListItemsModule implements IModule {

	private $data;
	private $db;
	private $userID;
	
	public function __construct() {
		$this->userID = $_SESSION['userID'];
	}
	
	public function executeWithArguments($args) {
		
		$this->db = new db();
		$result = $this->db->execQuery("SELECT * FROM lostitems, claims WHERE claims.lostItemID = lostitems.lostItemID and claims.userID = '".$this->userID."' ORDER BY claims.claimID ASC");
		$itemArray = array();
		if (!$result) {
			return;
		}
		while(($row = $result->fetch_assoc())){
			$itemArray[] = $row;
		}
		$this->data = $itemArray;
	}

	public function getRawData() {
		return $this->data;
	}

	public function getModuleName() {
		return "ListItems";
	}
}

?>