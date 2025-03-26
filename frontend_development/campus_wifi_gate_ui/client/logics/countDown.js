// Set the countdown time (5000 seconds)
var countdownTime = 4800;

// Function to start the countdown
function startCountdown() {
    var timeRemaining = countdownTime;

    // Update the countdown every 1 second
    var countdownFunction = setInterval(function() {

        // Calculate minutes and seconds
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = timeRemaining % 60;

        // Display the result in the element with id="countdown"
        document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";

        // Decrease time remaining
        timeRemaining--;

        // If the countdown is over, refresh the page and restart the countdown
        if (timeRemaining < 0) {
            clearInterval(countdownFunction);
            location.reload(); // Refresh the page
        }
    }, 1000);
}

// Start the countdown when the page loads
startCountdown();
