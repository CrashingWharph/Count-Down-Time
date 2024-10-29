// javascript for countdownDate-page 

let countdownDate = new Date("Dec 31, 2024 00:00:00").getTime();
var x = setInterval(function() {
    let now = new Date().getTime(); 
    let distance = countdownDate - now;
   
    // calculating time
    const second = 1000; 
    const minute = second * 60; // 1000 x 60
    const hour = minute * 60; // 60,000 x 60
    const day = hour * 24;  // etc

    // calculating count down timer
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor(distance / 1000 % 60);
    // const seconds = Math.floor(distance % (1000 * 60)) / (1000);

    // setting time calculations
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0)  {
        clearInterval(x);
        document.getElementById("days, hours, minutes, seconds").innerHTML = "00";
    }

}, 1000);