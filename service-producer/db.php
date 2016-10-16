<?php

class db{
	
	private $dbHost = "localhost";
	private $dbUser = "root";
	private $dbPass = "";
	private $dbName = "lostfound";
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