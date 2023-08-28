// Set the date we're counting down to
var countDownDate = new Date("sept 4 2024 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var ms = distance % 1000;



    // Output the result in an element with id="demo"
    document.getElementById("day").innerHTML = "<span class='spantext'>Days</span>" + days
    document.getElementById("hour").innerHTML = "<span class='spantext'>Hours</span>" + hours
    document.getElementById("minute").innerHTML = "<span class='spantext'>Minutes</span>" + minutes
    document.getElementById("second").innerHTML = "<span class='spantext'>Seconds</span>" + seconds
    document.getElementById("msecond").innerHTML = "<span class='spantext'>MilliSecond</span>" + ms


    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = "<span class='spantext'>Days</span>" + "0";
        document.getElementById("hour").innerHTML = "<span class='spantext'>Hours</span>" + "0";
        document.getElementById("minute").innerHTML = "<span class='spantext'>Minutes</span>" + "0";
        document.getElementById("second").innerHTML = "<span class='spantext'>Seconds</span>" + "0";
        document.getElementById("msecond").innerHTML = "<span class='spantext'>MilliSecond</span>" + "000";

        setTimeout(function () {
            document.getElementById("head1").innerHTML = "Hello World!";
        }, 6000);

    }
}, 120);
