<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="description" content="UTS Lost and Found web app">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=0">
		<title>UTS Lost and Found - release 1</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
		<link rel="stylesheet" href="css/style.css"> <!--link to the main css stylesheet-->

		<!-- Linking dependency scripts for the front end-->
		<script src="app/jquery-3.1.1.min.js"></script>

		<script src="app/web-service-consumer.js"></script>
		<script src="app/view-navigator.js"></script>

		<script src="app/controllers/my-lost-items-controller.js"></script>
		<script src="app/views/my-lost-items-view.js"></script>

		<!-- Linking model classes-->
		<script src="app/models/LostItem.js"></script>
	</head>

	<body>
		<header>
		<div class="currentLostItems">
			<div class="blueheader">
				<div id="logout"><a href="logout.php">Logout</a></div>
					<span>My Lost Items</span>
				<img id="logo" src="images/logo.png" alt="logo">
			</div>
		</header>

			<!--<div class="currentlostItemsBody">--> 
			<div class="main"><!--This div is for all of the lost itemss -->
				<div class="lostitemcard hidden"> <!--This div is for each of the individiual lost item -->
					<div class="cardInfo">
						<img id="cardImg" src="images/iphonelogo.png" alt="logo">
						<p class="nospace"><strong class="category">Insert Type Here</strong></p>
						<p class="nospace">Date Lost: <span class="datelost"/></p>
						<p class="nospace">Status: <span class="status"/></p>
					</div>
						<hr>
						<div id="individualCurrentLostItemBodyBtn">
					  <div class="inner"><button type="individualCurrentLostItemBodyBtn" id="cardBtn">VIEW</button></div>
					  <div class="inner"><button type="individualCurrentLostItemBodyBtn" id="cardBtn">EDIT</button></div>
						<div class="inner"><button type="individualCurrentLostItemBodyBtn" id="cardBtn">ARCHIVE</button></div>
					</div>
				</div>

				<div class="btndiv">
		     	<a href="lostitemform.php">
                    <button id="btn">
                      New Form
                    </button>
                </a>
		     	</div>

			</div>

		     
		</div>
	</body>


</html>
