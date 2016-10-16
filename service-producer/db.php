<?php

class db{
	
	private $dbHost = "m7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306";
	private $dbUser = "x645eid73vsny4jb";
	private $dbPass = "n6bu8crsdwq0vogb";
	private $dbName = "n999seyf40e9h3ah";
	protected $con;
	
	public function __construct(){
		$this->con = new mysqli($this->dbHost, $this->dbUser, $this->dbPass, $this->dbName);
		
		if (!$this->con){
			echo 'Failed to connect to database' . ' ' . $con->connect_error;
		}
	}
	
	public function execQuery($sql){
		$result = $this->con->query($sql);
		
		return $result;
	}
	
}

?>
