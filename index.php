<?php

session_start();

if (isset($_SESSION['userID'])) {
	if ($_SESSION['admin']) {
		header("Location: adminview.php");
	} else {
		header("Location: mylostitems.php");
	}
} else {
	header("Location: login.php");
}