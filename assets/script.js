// var body = document.querySelector('body');

// var divEl = $('<div>');

// divEl.addClass('textArea');

// body.append(divEl);

// console.log('here')

// var obj = {
//     "flammable": "inflammable",
//     "duh": "no duh"
//   };
//   $.each( obj, function( key, value ) {
//     alert( key + ": " + value );
//   });

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



// var container = $('.container')

// var divTimeblock = ['<div class="row time-block"><div class="col-sm-2 hour">9am</div><textarea class="col-sm-8 description"></textarea><button class="col-sm-2 saveBtn">Save</button></div>'];

// container.append(divTimeblock);

// Make the hour dynamic

// Make the time on the textArea dynamic depending on if it is in the past present or future

// Allow user to type in textArea & when they click on Save Button they can save it on local Storage

// Use local storage Getitem to retreive data from local storage 

// Save the data only when save button is clicked 


