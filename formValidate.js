/********w************
    
	Project 3 Javascript
	Name: Karanjit Singh
	Date: April 19, 2023
	Description: Various method written and called from the load method
	such as add method to add the equipment and display the error message.

*********************/

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
	// Hides all error elements on the page
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;

}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('Clear order?')) {
		// Ensure all error fields are hidden
		hideErrors();

		// Set focus to the first text field on the page
		document.getElementById("qty1").focus();

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {

	//	Complete the validations below
	let errorFlag = false;

	let email = document.getElementById("email").value;
	let emailReg = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

	if (email == null || email == "")
	{
		document.getElementById("email_error").style.display = "block";

		if (!errorFlag)
		{
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}
	}

	if (!emailReg.test(email))
	{
		document.getElementById("emailformat_error").style.display = "block";

		if(!errorFlag)
		{
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}

		errorFlag = true;
	}

	let requiredName = ["name"];

	for (let i = 0; i < requiredName.length; i++)
	{
		if (document.getElementById(requiredName[i]).value == null || document.getElementById(requiredName[i]).value == "")
		{
			document.getElementById(requiredName[i] + "_error").style.display = "block";

			if (!errorFlag)
			{
				document.getElementById(requiredName[i]).focus();
				document.getElementById(requiredName[i]).select();
			}

			errorFlag = true;
		}
	}

	let regex = new RegExp(/^\d{10}$/);
	let cardNumber = document.getElementById("phone").value;

	if (cardNumber == null || cardNumber == "")
	{
		document.getElementById("phoneNumber_error").style.display = "block";

		if (!errorFlag)
		{
			document.getElementById("phone").focus();
			document.getElementById("phone").select();
		}
	}

	if (!regex.test(cardNumber))
	{
		document.getElementById("phoneNumberFormat_error").style.display = "block";

		if (!errorFlag)
		{
			document.getElementById("cardnumber").focus();
			document.getElementById("cardnumber").select();
		}

		errorFlag = true;
	}

	let requiredField = document.getElementById("comment").value;

	if (requiredField == null || requiredField == "")
	{
		document.getElementById("comment_error").style.display = "block";

		if (!errorFlag)
		{
			document.getElementById("comment").focus();
			document.getElementById("comment").select();
		}

		errorFlag = true;
	}

	return errorFlag;
}

/*
 * Hides all of the error elements.
 */
function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Handles the load event of the document.
 */
function load() {
	// Add event listener for the form submit
	document.getElementById("contact-form").addEventListener("submit", validate);
	document.getElementById("contact-form").addEventListener("reset", resetForm);
	
	hideErrors();
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);