// workday scheduler code
// variable to grab all the time blocks 
var timeblock = document.querySelectorAll("hour");


//write function to display current day at top of callendar 
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

console.log(today.format("H"));
//add in code to change color of blocks as time passes(past, present, future)
var colorCode = function(){

for (let index = 9; index < timeblock.length; index++) {
        
        
}

}


//add in click event into a block of time and add event 
        //add ability to save event in local storage

//  GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
        // use moment
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
        // hour, user input, save button
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
        //  change classes
// WHEN I click into a time block
// THEN I can enter an event
        // input || textArea
// WHEN I click the save button for that time block
        // save function
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
        // get from local storage

