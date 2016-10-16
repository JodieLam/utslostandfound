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

		<script src="app/controllers/view-lost-item-controller.js"></script>
		<script src="app/views/view-lost-item-view.js"></script>

		<!-- Linking model classes-->
		<script src="app/models/LostItem.js"></script>
	</head>

	<body>
		<header>
		<div class="currentLostItems">
			<div class="blueheader">
 				<a id="back"><img id="returnimg" src="images/arrow_back_white.png" alt="Return"></a>
					<span>Lost Item</span>
				<img id="logo" src="images/logo.png" alt="logo">
			</div>
		</header>

			<!--<div class="currentlostItemsBody">--> 
			<div class="main"><!--This div is for all of the lost itemss -->

				<div class="viewItemCard"> <!--This div is for each of the individiual lost item -->
					<div class="cardInfo">
						<img id="cardImg" src="images/iphonelogo.png" alt="logo">
						<p class="nospace"><strong class="desc">iPhone 6</strong></p>
						<p class="nospace">Date Lost: <span class="datelost"/></p>
						<p class="nospace">Status: <span class="status"/></p>
						<p class="nospace">Category: <span class="category"/></p>
						<p class="nospace">Colour: <span class="colour"/></p>
						<p class="nospace">Location Lost: <span class="locationlost"/></p>
						<p class="nospace">Additional Comments: <span class="comment"/></p>
						<p class="nospace">Picture:</p>
						<img id="viewItemPic" src="images/iphonepic.jpg" alt="logo">
					</div>
						<hr>
					<div id="individualCurrentLostItemBodyBtn">
					  <div class="inner"><button type="individualCurrentLostItemBodyBtn" id="cardBtn">EXIT</button></div>
					  <div class="inner"><button type="individualCurrentLostItemBodyBtn" id="cardBtn" class="edit">EDIT</button></div>
						<div class="inner"><button type="individualCurrentLostItemBodyBtn" id="cardBtn" >ARCHIVE</button></div>
					</div>
				</div>



			</div>

		     
		</div>
	</body>


</html>
