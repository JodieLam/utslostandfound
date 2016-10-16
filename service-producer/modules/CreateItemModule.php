<?php
require_once("././IModule.php");
require_once("././db.php");

class CreateItemModule implements IModule {

	public function __construct() {
		$this->userID = $_SESSION['userID'];
	}
	
	private $userID;
	private $data;
	private $db;
	
	public function executeWithArguments($args) {

		$this->db = new db();
		$insertItem = $this->db->execQuery("INSERT INTO lostitems (category, subcategory, colour, dayLost, locationLost, comment) VALUES ('" .$args['category'] . "','" . $args['subcat'] . "','" . $args['colour'] . "','" . $args['lostdate'] . "','" . $args['location'] . "','"  .$args['comment']."')");
		$lostItemID = $this->db->execQuery("SELECT lostItemID FROM lostitems where id=LAST_INSERT_ID()")->fetch_array()[0];
		$insertClaim = $this->db->execQuery("INSERT INTO claims (lostItemID, userID, status, archived) VALUES ('".$lostItemID."', ".$this->userID.",0,0)");
		$this->data=array("status"=>"0");
	}

	public function getRawData() {
		return $this->data;
	}

	public function getModuleName() {
		return "CreateItem";
	}
}

?>