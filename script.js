// get and display current date and time
var today = moment().format("dddd, MMMM Do YYYY h:mm:ss a");
$("#currentDay").text(today);
console.log(today)


// save input to local storage
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var textInput = $(this).siblings(".description").val();
        var time = $(this).attr("id");

        localStorage.setItem(textInput, time);
        console.log(textInput)
    })
    
// function to compare current time with past, present, and future

function getTime() {
    var currentTime = moment().hour();

    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id"));

        if (timeBlock < currentTime) {
            $(this).addClass("past");
         } else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
         } else {
             $(this).removeClass("past");
             $(this).removeClass("present");
             $(this).addClass("future");
         }  
            
        
    })

}

// pull input from local storage

$("#text-9").val(localStorage.getItem("09"));
$("#text-10").val(localStorage.getItem("10"));
$("#text-11").val(localStorage.getItem("11"));
$("#text-12").val(localStorage.getItem("12"));
$("#text-13").val(localStorage.getItem("13"));
$("#text-14").val(localStorage.getItem("14"));
$("#text-15").val(localStorage.getItem("15"));
$("#text-16").val(localStorage.getItem("16"));
$("#text-17").val(localStorage.getItem("17"));


getTime();

})
