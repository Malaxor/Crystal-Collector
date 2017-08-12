
$(document).ready(function() {

	// Global variables //
	var wins = 0;
	var losses = 0;
	var score = 0;
	var trackBlue = 0;
	var trackYellow = 0;
	var trackRed = 0;
	var trackGreen = 0;

	// function will generate a random number from 19 - 120 that will be displayed in HTML
	// call the function to run it, then call it at the beginning of every new game to generate a new random number
	function resetRandom () {
		randomNumber = Math.floor(Math.random() * 101) + 19;
		$("#random").html("<h2>Catch me: "+ randomNumber + "</p>");
	}
	resetRandom();

	// function will display wins, losses and score
	// call the function to run it, then call the function to reset the score ("your score") at the beginning of every new game
	function resetScore () {
		score = 0;
		$("#wins").html("<p>Wins: " + wins + "</p>");
		$("#losses").html("<p>Losses: " + losses + "</p>");
		$("#score").html("<h2>Your score: " + score + "</h2>");
	}	
	resetScore();

	// function that displays the point-value for each crystal
	// each cyrstal will display its point value underneath itself
	function resetCrystal () {
		trackBlue = 0;
		trackYellow = 0;
		trackRed = 0;
		trackGreen = 0
		$("#value-blue").html(trackBlue); 
		$("#value-yellow").html(trackYellow); 
		$("#value-red").html(trackRed); 
		$("#value-green").html(trackGreen); 
	}
	resetCrystal();

	// assign a random value to each crystal
	// call the function to run it, then call the function at beginning of every new game to generate a new random numbers for each jewl
	function resetPoints () { 
		$("#red").attr("point-value", Math.floor(Math.random() * 13) +1);
		$("#blue").attr("point-value", Math.floor(Math.random() * 13) +1);
		$("#green").attr("point-value", Math.floor(Math.random() * 13) +1);
		$("#yellow").attr("point-value", Math.floor(Math.random() * 13) +1);
	}
	resetPoints();

	// Create a reset function that encompasses all other reset functions
	function resetAll () {
		resetPoints();
		resetRandom();
		resetScore();
		resetCrystal();
	}
	resetAll();	

	// When you click on the blue crystal
	$("#blue").on("click", function() {

	//the mouse-click will exctact the "point value", which, after being parsed and turned into an integer, will be added to "your score"
	score += parseInt($(this).attr("point-value"));

	//the score will be displayed in html
	$("#score").html("<h2>Your score: " + score + "</h2>");

	//display the current "point-value" underneath the blue crystal
	trackBlue = parseInt($(this).attr("point-value"));
	$("#value-blue").html(trackBlue);

		if (randomNumber === score) {
			wins++;
			alert ("Riches, here I come!");
			resetAll();
		}
		else if (score > randomNumber)
		{
			losses++;
			alert ("You ain't no Indian Jones!");
			resetAll();	
		}	

	}); // END on click END

	// When you click on the yellow crystal
	$("#yellow").on("click", function() {

	//the mouse-click will exctact the "point value", which, after being parsed and turned into an integer, will be added to "your score"
	score += parseInt($(this).attr("point-value"));

	//the score will be displayed in html
	$("#score").html("<h2>Your score: " + score + "</h2>");

	//display the current "point-value" underneath the blue crystal
	trackYellow = parseInt($(this).attr("point-value"));
	$("#value-yellow").html(trackYellow);

		if (randomNumber === score) {
			wins++;
			alert ("Riches, here I come!");
			resetAll();
		}
		else if (score > randomNumber)
		{
			losses++;
			alert ("You ain't no Indian Jones!");
			resetAll();	
		}	

	}); // END on click END

	// When you click on the red crystal
	$("#red").on("click", function() {

	//the mouse-click will exctact the "point value", which, after being parsed and turned into an integer, will be added to "your score"
	score += parseInt($(this).attr("point-value"));

	//the score will be displayed in html
	$("#score").html("<h2>Your score: " + score + "</h2>");

	//display the current "point-value" underneath the blue crystal
	trackRed = parseInt($(this).attr("point-value"));
	$("#value-red").html(trackRed);

		if (randomNumber === score) {
			wins++;
			alert ("Riches, here I come!");
			resetAll();
		}
		else if (score > randomNumber)
		{
			losses++;
			alert ("You ain't no Indian Jones!");
			resetAll();	
		}	

	}); // END on click END

	// When you click on any crystal
	$("#green").on("click", function() {

	//the mouse-click will exctact the "point value", which, after being parsed and turned into an integer, will be added to "your score"
	score += parseInt($(this).attr("point-value"));

	//the score will be displayed in html
	$("#score").html("<h2>Your score: " + score + "</h2>");

	//display the current "point-value" underneath the blue crystal
	trackGreen = parseInt($(this).attr("point-value"));
	$("#value-green").html(trackGreen);

		if (randomNumber === score) {
			wins++;
			alert ("Riches, here I come!");
			resetAll();
		}
		else if (score > randomNumber)
		{
			losses++;
			alert ("You ain't no Indian Jones!");
			resetAll();	
		}	

	}); // END on click END

}); // END ready function END	