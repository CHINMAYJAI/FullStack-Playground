// real time loading
setInterval(() => {
    // getting current date's object
    let date = new Date();
    // getting current time in the form of string
    let time = date.toLocaleTimeString()
    // setting time into the html span tag to display time
    document.getElementById("time").innerHTML = time;

    // getting current date

    // fetching current year
    let current_year = date.getFullYear();
    // fetching current month number
    let current_month_number = date.getMonth();
    // array of month name
    let month_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // fetching the name of the month
    let current_month = month_array[current_month_number]
    // fetching the current date
    let current_date = date.getDate()
    // setting current date into the html span tag to dispaly date
    document.getElementById("date").innerHTML = current_month + " " + current_date + ", " + current_year;

    // getting day number
    let day_number = date.getDay();
    // creating the array to display the correct current day
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // fetching the current day
    let current_day = days[day_number]
    // setting the current day into the html span tag to display day
    document.getElementById("day-time").innerHTML = current_day;
}, 1000);