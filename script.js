// console.log("am i connected?")

// Today's Date & Time
var update = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);


// localStorage.setItem("userEntry", "Doctor");

localStorage.setItem('textarea', JSON.stringify(user));