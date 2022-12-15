// Delare global variables

var today = moment ();
var timeBlockEl = document.querySelector (".container");

// Displays current date and time
$('#currentDay').text(today.format('LLLL'));

$('.saveBtn').on('click', function () {
  // setting up localStorage
  var textValue = $(this).siblings('.description').val();

  var timeKey = $(this).parent().attr('id');

  // save in local storage
  localStorage.setItem(timeKey, textValue);
});

// Get item from local storage 
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

// Function to track tasks and make them change colors if they are in the past, present or future
function setColors() {
  var currentHour = today.hours();


  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);

    // sets past color
    if (timeId < currentHour) {
      $(this).addClass('past');
    } 
    // sets present color
    else if (timeId === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    // sets future color
    }else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

// call function
setColors();

// Use setTimeout to update the time every minute (1000ms * 60s)
setTimeout(function () {
  location = '';
}, 1000 * 60);

