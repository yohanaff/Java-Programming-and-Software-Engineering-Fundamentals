/* Replace your alert code with a function that calls the alert */
function doChange() {
    alert('Clicked button with JS function');
}

/* Extra Challenge! */
function confirmBox() {
    var choice = confirm('Press a button!');

    if (choice == true)  {
        var message = "You pressed OK!";
    }
    else {
        message = "Are you sure you want to cancel?";
    }
/* Create an alert box that displays message */
    alert(message);
}

