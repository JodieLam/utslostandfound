<?php
require_once("././IModule.php");
require_once("././db.php");

class ViewItemModule implements IModule {

	private $data;
	private $db;
	
	public function executeWithArguments($args) {
		$this->db = new db();
		$result = $this->db->execQuery("SELECT lostitems.lostItemID, lostitems.category, lostitems.subcategory, lostitems.colour, lostitems.dayLost, lostitems.locationLost, lostitems.comment, claims.status, claims.archived FROM lostitems, claims WHERE lostitems.lostItemID = claims.lostItemID AND lostitems.lostItemID='".$args['itemid']."'");
		$this->data = $result->fetch_assoc();
	}

	public function getRawData() {
		return $this->data;
	}

	public function getModuleName() {
		return "ViewItem";
	}
}

?>