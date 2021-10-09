// console.log("am i connected?")

// Today's Date & Time
// var currentDate = moment().format('MMMM DD YYYY');
// $("#currentDay").html(todayDate);

var update = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// Save Btn >> Local

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");


        localStorage.setItem(time, text);
    })

    function trackTime() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var blkTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blkTime < currentTime) {
                $(this).deleteClass("future");
                $(this).deleteClass("present");
                $(this).addClass("past");
            }
            else if (blkTime === currentTime) {
                $(this).deleteClass("past");
                $(this).deleteClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).deleteClass("present");
                $(this).deleteClass("past");
                $(this).addClass("future")
            }

        })

    }


    $("#am8 .description").val(localStorage.getItem("am8"));
    $("#am9 .description").val(localStorage.getItem("am9"));
    $("#am10 .description").val(localStorage.getItem("am10"));
    $("#am11 .description").val(localStorage.getItem("am11"));
    $("#pm12 .description").val(localStorage.getItem("pm12"));
    $("#pm1 .description").val(localStorage.getItem("pm1"));
    $("#pm2 .description").val(localStorage.getItem("pm2"));
    $("#pm3 .description").val(localStorage.getItem("pm3"));
    $("#pm4 .description").val(localStorage.getItem("pm4"));
    $("#pm5 .description").val(localStorage.getItem("pm5"));
    $("#pm6 .description").val(localStorage.getItem("pm6"));

    trackTime();
})