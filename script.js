// workday scheduler code
var time9 = document.querySelector("#am9");
var time10 = document.querySelector("#am10");
var time11 = document.querySelector("#am11");
var time12 = document.querySelector("#pm12");
var time01 = document.querySelector("#pm1");
var time02 = document.querySelector("#pm2");
var time03 = document.querySelector("#pm3");
var time04 = document.querySelector("#pm4");
var time05 = document.querySelector("#pm5");

//write function to display current day at top of callendar 
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//add in code to change color of blocks as time passes(past, present, future)
var colorCode = function(){



}


//add in click event into a block of time and add event 
        //add ability to save event in local storage