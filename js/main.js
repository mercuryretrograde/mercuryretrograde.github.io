
function askQuestions() {
	var firstName = prompt("What is your first name?"),
	    lastName = prompt("What is your last name?"),
	    agerange = prompt("What is your age?")
	    faveColor = prompt("What is your favorite color?").toLowerCase()

	if (firstName == null )  
		{firstName = ""}

	if (lastName == null )  
		{lastName = ""}

	var fullName = firstName + " " + lastName


	if  ( faveColor == 'red'    ||
		  faveColor == 'yellow' ||
		  faveColor == 'green'  ||
		  faveColor == 'blue' 
		)
	{
		$('h1').css('color', faveColor);
	} else {$('h1').css('color', 'white');}




	if (firstName.toLowerCase() === "General" && lastName.toLowerCase() !== "Assembly") {
		console.log("Greetings, " + fullName.toUpperCase())
	} else {
		console.log("Get outta here " + fullName.toUpperCase())
	}

	agerange = parseInt(agerange)

	if (agerange >= 18) {
		console.log("Welcome adult " + lastName.toUpperCase())

	} else if ( agerange >= 13) {
		console.log("Come back in a few years " + firstName.toUpperCase())
	} else {
		console.log ("Go away minor")
	}

    $('h2').text('Hello ' + fullName)
}
// When the page has loaded -- ie wait until the DOM is constructed

$(function() {
    
	//Hide all content
	$('h3').next().hide();

    $('img').on('click', askQuestions);
	// When the user clicks an H3 
	$('h3').on('click', function () {
		// toggle the next element
		$(this).next().slideToggle(2000);

	})

	
});