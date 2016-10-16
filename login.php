<?php
require_once("service-producer/db.php");

$db = new db();
$error="";
session_start();

if(isset($_POST['submitLogin'])){
	if (empty($_POST['username']) || empty($_POST['password'])) {
		$error = "Enter a username and password.";
	}
	else{
		$userID=$_POST['username'];
		$password=$_POST['password'];
		$admin = isset($_POST['admin']);
		
		$sql = "SELECT passwordHash, privilege FROM credentials WHERE userID='".$userID."'";
		$query = $db->execQuery($sql);
		$results = $query->fetch_assoc();
		
		$passwordCheck = password_verify($password, $results['passwordHash']);
		
		$rows = $query->num_rows;
		
		if ($rows == 1 && $passwordCheck == true) {
			$_SESSION['userID']=$userID;
			$_SESSION['admin'] = $admin;
			if ($results['privilege'] == '0' && !$admin) {
				header("location: mylostitems.php");
			} else if ($results['privilege'] == '1' && $admin) {
				header("location: adminview.php");
			} else {
				$error = "Please choose correct privelege setting";
			}
		} 
		else {
			$error = "Invalid username/password";
		}
	}

}
?>
<html>

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="description" content="UTS Lost and Found web app">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=0">
		<title>UTS Lost and Found - release 1</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
		<link rel="stylesheet" href="css/style.css"> <!--link to the main css stylesheet-->
	</head>

<body>
	<div class="logincontainer">

	<img id="loginlogo" src="images/bLogo.png">
<p><?php echo $error; ?>
		<form action="login.php" method="POST">
			<input type="hidden" name="submitLogin" />
			Username:<br>
			<input type="text" name="username"><br>
			Password:<br>
			<input type="password" name="password"><br><br>
			Admin Login: 
			<label class="switch">
			  <input type="checkbox" name="admin">
			  <div class="slider round"></div>
			</label>
					<div class="loginbuttoncontainer">
	                    <button id="btn" type="Submit">
	                      Login
	                    </button>
	        </a>
	    </div>
		</form>


		

		<div class="loginback">
			<a href="index.php"><img id="loginbackbtn" src="images/arrow_back.png" alt="Return"></a>
		</div>
	</div>
</body>
</html>
