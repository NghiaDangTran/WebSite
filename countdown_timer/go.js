// straat time=09:00:00




var countDownDate = 9 * 24 * 60 * 60;
var now = 1;


var days = Math.floor(countDownDate / (1000 * 60 * 60 * 24));
var hours = Math.floor((countDownDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((countDownDate % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);




var x = setInterval(function() {

        // Get today's date and time

        // Find the distance between now and the count down date

        countDownDate--
        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(countDownDate / (60 * 60 * 24));
        hours = Math.floor((countDownDate % (60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((countDownDate % (60 * 60)) / (60));
        seconds = ((countDownDate % (60)) / 1);

        // Display the result in the element with id="demo"
        if (days < 10) {
            days = "0" + days;
        }

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementsByClassName("days")[0].innerHTML = days;
        document.getElementsByClassName("hours")[0].innerHTML = hours;
        document.getElementsByClassName("mins")[0].innerHTML = minutes;
        document.getElementsByClassName("secs")[0].innerHTML = seconds;
        // If the count down is finished, write some text


    },
    1);