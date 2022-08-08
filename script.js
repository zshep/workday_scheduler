// workday scheduler code
// variable to grab all the rows (timeblocks)
//let timeblock = document.querySelectorAll(".row");
var today = moment();
var curhour = today.format("H");


//write function to display current day at top of callendar 
$("#currentDay").text(today.format("MMM Do, YYYY"));


//function to change color of blocks as time passes(past, present, future)
var colorCode = function(){
let timeblock = document.querySelectorAll(".row");
//debugging
console.log(timeblock); //
console.log(curhour); // current hour
console.log("the function is running");
//run through the array and set past, present, future
for (let i = 0; i < timeblock.length; i++) {
        let curTime = timeblock[i];
        let viewT = curTime.dataset.num;
        console.log(viewT);
        //if statement to compare current hour w/ each color div
        if (viewT < curhour) {
                //set timeblock to have class of past only
                console.log(viewT);
                console.log("past");
                $(this).addClass("past");
                $(this).removeClass("future present");
                               
        }
                if (viewT == curhour) {
                // set timeblock to have class present only
                console.log("present");
                $(this).addClass("present");
                $(this).removeClass("future past");
                
                 }
                else {
                // set timeblock to have class future only
                console.log("future");
                $(this).addClass("future");
                $(this).removeClass("present past");
                
                }
        
}

}
 colorCode();


//creat var. to hold users click


 //add in click event into a block of time and add event 
        //add ability to save event in local storage


    
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
        // hour, user input, save button

// WHEN I click into a time block
// THEN I can enter an event
        // input || textArea
// WHEN I click the save button for that time block
        // save function
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
        // get from local storage

