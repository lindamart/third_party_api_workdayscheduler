// console.log("am i connected?")

// Time and date for header
var update = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// Save button click and set item in local storage

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");


        localStorage.setItem(time, text);
    })


    // Function to tell whether hour is in past, present or future

    //If hour is in past, present or future either it should clear and then add 
    //the correct class (css includes color) based on the block of time and current time


    function trackTime() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var blkTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blkTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blkTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future")
            }

        })

    }

    // Store the current value of hour element in local note in Calendar 
    // based on entry in specific hour

    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));

    trackTime();
})