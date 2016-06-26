'use strict';

angular.module('medicationReminderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
  
/* Display time */
function getTime(){
	var currTime = new Date();
	var hour = currTime.getHours();
	var minute = currTime.getMinutes();
	var period = "AM";
	// If minutes are 0-9, add a 0 in front of it
	if (minute < 10)
	minute = "0" + minute;
	// If time is greater than 12, period is PM. Does not use 24-hour clock format.
	if (hour => 12) {
	period = "PM";
	hour = hour - 12;
	}
	// If time is 0, it is 12:00. Default is AM. If time greater than 12, then PM.
	if (hour == 0) {
	hour = 12;
	}
	document.write(" " + hour + ":" + minute + " " + period);
}

/* Display date */
function getDate(){
	var currDate = new Date();
	// If months are 0-9, add a 0 in front of it
	var month = currDate.getUTCMonth() + 1; 
	if (month < 10)
	month = "0" + month;
	// If days are 0-9, add a 0 in front of it
	var day = currDate.getUTCDate();
	if (day < 10)
	day = "0" + day;
	var year = currDate.getFullYear();
	document.write(month + "/" + day + "/" + year + " " + "<br>");
}