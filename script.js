// workday scheduler code
// variable to grab all the rows (timeblocks)
//let timeblock = document.querySelectorAll(".row");
var today = moment();
var curhour = today.format("H");
var saveBTN = $('.saveBtn');

//write function to display current day at top of callendar 
$("#currentDay").text(today.format("MMM Do, YYYY"));

// brings up all saved items from localstorage
localStorage.getItem("myEvent");

//function to change color of blocks as time passes(past, present, future)
var colorCode = function(){
let timeblock = document.querySelectorAll(".row");
//debugging
console.log(timeblock);
console.log(curhour); // current hour
console.log("the function is running");
//run through the array and set past, present, future
for (let i = 0; i < timeblock.length; i++) {
        
        let viewT = timeblock[i].dataset.num;
        console.log(viewT);
        //if statement to compare current hour w/ each color div
        if (viewT < curhour) {
                //set timeblock to have class of past only
                console.log(`the current hour is ${curhour}`)
                console.log(`The current timeblock is ${viewT}`);
                console.log("past");
                $(timeblock[i]).addClass("past");
                $(timeblock[i]).removeClass("future present");

                }
                if (viewT == curhour) {
                // set timeblock to have class present only
                console.log(`the current hour is ${curhour}`)
                console.log(`The current timeblock is ${viewT}`);
                console.log("present");
                $(timeblock[i]).addClass("present");
                $(timeblock[i]).removeClass("future past");
                
                 }
                if (viewT > curhour) {
                // set timeblock to have class future only
                console.log(`the current hour is ${curhour}`)
                console.log(`The current timeblock is ${viewT}`);
                console.log("future");
                $(timeblock[i]).addClass("future");
                $(timeblock[i]).removeClass("present past");
                
                }
        
}}

// function to work save button
{
        

// WHEN I click into a time block
// THEN I can enter an event
        // input || textArea
// WHEN I click the save button for that time block
        // save function
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
        // get from local storage

}
//action code
 colorCode();

$("button").on("click", function(event){
        let userPick = event.target;
        console.log(userPick);
        localStorage.setItem("myEvent", $('textarea'))


}
        
)



 





