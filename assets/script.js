
//display current day & time.
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 

// Save button click listener for text and time stamp

$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save textarea content into local storage
    localStorage.setItem(time,text);
});

function currentTime() {
    // current hour 
    var timeNow = moment().hour();

    // Loop over time blocks
    $(".time-block").each(function() {
        var timeBlock = $(this)
        // Change class of time-block based on time
        if (timeBlock < timeNow) {
            $(this).removeClass("future");
            $(this).addClass("past");
            $(this).removeClass("present");
        } else if (timeBlock === timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });

// getItem from lcoal storage
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#9am .description").val(localStorage.getItem("11am"));
$("#9am .description").val(localStorage.getItem("12pm"));
$("#9am .description").val(localStorage.getItem("1pm"));
$("#9am .description").val(localStorage.getItem("2pm"));
$("#9am .description").val(localStorage.getItem("3pm"));
$("#9am .description").val(localStorage.getItem("4pm"));
$("#9am .description").val(localStorage.getItem("5pm"));

currentTime();
}
