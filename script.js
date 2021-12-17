// get and display current date and time
var today = moment().format("dddd, MMMM Do YYYY h:mm:ss a");
$("#currentDay").text(today);
console.log(today)

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var textInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, textInput);
        
    
});

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



$("#text-9 .description").val(localStorage.getItem("09"));
$("#text-10 .description").val(localStorage.getItem("10"));
$("#text-11 .description").val(localStorage.getItem("11"));
$("#text-12 .description").val(localStorage.getItem("12"));
$("#text-13 .description").val(localStorage.getItem("13"));
$("#text-14 .description").val(localStorage.getItem("14"));
$("#text-15 .description").val(localStorage.getItem("15"));
$("#text-16 .description").val(localStorage.getItem("16"));
$("#text-17 .description").val(localStorage.getItem("17"));


getTime();
})
