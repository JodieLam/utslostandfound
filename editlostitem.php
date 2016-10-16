<html lang="en">
  <head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="description" content="UTS Lost and Found web app">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=0">
		<title>UTS Lost and Found - release 1</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en">
		<link rel="stylesheet" href="css/style.css">

		<!-- Linking dependency scripts for the front end-->
		<script src="app/jquery-3.1.1.min.js"></script>

		<script src="app/web-service-consumer.js"></script>
		<script src="app/view-navigator.js"></script>
		
		<script src="app/controllers/edit-lost-item-form-controller.js"></script>
		<script src="app/views/lost-item-form-view.js"></script>

		<!-- Linking model classes-->
		<script src="app/models/LostItem.js"></script>
	</head>
	<body>

	<!-- New lost item form !-->
			<header>
	<div class="whiteheader">
		 <a href="mylostitems.php"><img id="returnimg" src="images/arrow_back.png" alt="Return"></a>
					<span>Edit Lost Item Form</span>
				</div>
			</header>
			<main>
							<div class="main">
								<h4>Item details</h4>
									<form onsubmit="return false;">
										<input type="hidden" name="module" value="CreateItem" /> 
										<span>Category*: </span>
										<select name="category" id="category"></select><p/>
										<span>Sub-Category*: </span>
										<select name="subcat" id="subcat"></select><p/>
										<span>Colour*: </span>
										<select name="colour" id="colour"></select><p/>
										<span>Location Lost: </span>
										<select name="location" id="location"></select><p/>
										<span>Date Lost*: </span>
										<input type="date" id="lostdate" name="lostdate">

									 <p/>
										<div class="commentsbox">
										<label for="comments">Additional details:</label>
										<textarea id="comments" type="text" rows= "3" name="comment" ></textarea>
										 
										</div></p>
										
				 <div class="btndiv">
										<button id="btn" type="submitItemClaim">
											Update
										</button>
				 </div>
									</form>
							</div>
			</main>
	</body>
</html>
