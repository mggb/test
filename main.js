
var startDate = new Date(2018,6,1,10,30); // June 1st, 10:30
var endDate = new Date(2018,6,1,14,00); // June 1st, 14:00

new Event(true, true, startDate, endDate); // weekly recurring opening in calendar

startDate = new Date(2018,6,8,11,30); // June 8th 11:30
endDate = new Date(2018,6,8,12,30); // June 8th 12:30
new Event(false, false, startDate, endDate); // intervention scheduled


var fromDate = new Date(2018,6,4,10,00);
var toDate = new Date(2018,6,10,10,00);

Event.prototype.availabilities(fromDate, toDate);
