/**
 * Created by Gaming-User on 4/24/2017.
 */
var wake_up= 8;
var lunch_time = 12;
var nap_time = 14;
var party_time = 19;

var time = new Date().getHours();
//  var time = lunch_time;
// console.log(time);
var message = "";
var image = "";

var timeEvent = document.getElementById("timeEvent");

var lolcatImage = document.getElementById('lolcat');

var updateClock = function()
{
    if (time == party_time)
    {
        message = " It's time to PAR-TAY!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    }
    else if (time == nap_time)
    {
        message = "It's time for some shut-eye. zzz...";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    }
    else if (time == lunch_time)
    {
        message = "FOOD. Let's get some food!";
        image = "https://68.media.tumblr.com/8bf6b4e1cd5eb1a9217ea0ad1ffa2c76/tumblr_ojmoyviaZE1s3ufuro1_500.jpg";
    }
    else if (time == wake_up)
    {
        message = "WAKE UP!!";
        image = "http://media.tumblr.com/tumblr_lrmtnf9DYw1qe5tmi.jpg";
    }
    else
    {
        message = "Not sure... let's dance!";
        image = "http://31.media.tumblr.com/a9d6b265d1f45ce6308ee680cfd2049f/tumblr_ne9n48NBbg1tzms7wo1_400.gif";
    }

    lolcatImage.src = image;
    timeEvent.innerText = message;

    showCurrentTime();
}


var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= 12)
    {
        meridian = "PM";
    }
    if (hours > 12)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
//     var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    var clockTime = hours + ':' + minutes + "!";

    clock.innerText = clockTime;
};


var isPartyTime = false;
var partyButton = document.getElementById("partyTimeButton");
var partyEvent = function()
{
    var party_time = 19;
    //check isPartyTime
    if (isPartyTime == false){
        // if isPartyTime is false, change it to true
        //so we know the button has been clicked
        isPartyTime = true;
        // set time to partyTime so the lolCat clock
        //image and message update to the partyTime image and message
        time = party_time;
        partyButton.style.background = "#222";
    } else {
        // if isPartyTime is true, change it to false to end the party
        isPartyTime = false;
        // set time back to the current time
        time = new Date().getHours();
        partyButton.style.background = "#0A8DAB";
    }
    //console.log(time);
    updateClock();

};


var oneSecond = 1000;
var oneMinute = 60000;
setInterval( updateClock, oneMinute);

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
{
    wake_up = wakeUpTimeSelector.value;
    updateClock();
};

var lunchTimeTimeSelector =  document.getElementById("lunchTimeSelector");
var lunchEvent = function()
{
    lunch_time = lunchTimeTimeSelector.value;
    updateClock();
};

var napTimeTimeSelector =  document.getElementById("napTimeSelector");
var napEvent = function()
{
    nap_time = napTimeTimeSelector.value;
    updateClock();
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeTimeSelector.addEventListener('change', lunchEvent);
napTimeTimeSelector.addEventListener('change', napEvent);

updateClock();

partyButton.addEventListener("click", partyEvent);
