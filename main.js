
//This is the date we're counting down to
const countDownDate = new Date("Dec 24, 2022 18:00:00").getTime();

//We want the count to update every second
const x = setInterval(function(){
    //Here we're getting the date and time today
    const now = new Date().getTime();
    //Finding the distance from today until christmas 
    const until = countDownDate - now;

    //Calculations for days, hourss. minutes and seconds
    const days = Math.floor(until / (1000 * 60 * 60 * 24));
    const hours = Math.floor((until % (1000 * 60 * 60 * 24)) / ((1000 * 60 * 60 )));
    const minutes = Math.floor((until % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((until % (1000 * 60)) /1000);

    //This is how the countdown timer is displayed on the website
    document.getElementById("count").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    //If I would have more time I would have liked to make something more of this counter and put it into template litterals  

    //THis is the message we get when the timer has stopped
    if (until < 0) {
        clearInterval(x);
        document.getElementById("count").innerHTML = "Christmas!"
    }
}, 1000);
