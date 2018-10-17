var eventList = [];

var Event = function(opening, recurring, startDate, endDate){
  this.opening = opening;
  this.recurring = recurring;
  this.startDate = startDate;
  this.endDate = endDate;

  eventList.push(this);
};

Event.prototype.availabilities = function(fromDate, toDate){
  // var stockOpeningTrueRecuringTrue = eventList.filter(event => event.opening === true && event.recurring === true)
  // var stockOpeningTrueRecuringFalse = eventList.filter(event => event.opening === true && event.recurring === false)
  // var stockOpeningFalseRecuringTrue = eventList.filter(event => event.opening === false && event.recurring === true)
  // var stockOpeningFalseRecuringFalse = eventList.filter(event => event.opening === false && event.recurring === false)
  var stockOpeningFalse = eventList.filter(event => event.opening === false ) /* filters the date opening of event in variable */
  var stockOpeningTrue = eventList.find(event => event.opening === true ) /* filters the date opening of event in variable */
  var date = fromDate;
  var result =  []; /*table to store the time that is requested  */
  while (date < toDate) {

  if (date.toTimeString() >= stockOpeningTrue.startDate.toTimeString() && date.toTimeString() <= stockOpeningTrue.endDate.toTimeString() ) { /*the condition allows you to remove the hours that are not in the time slot of the working period. */
    for (var i = 0; i < stockOpeningFalse.length; i++) {
      if (stockOpeningFalse[i].recurring === false && !(date >= stockOpeningFalse[i].startDate && date <= stockOpeningFalse[i].endDate )) {  /*Removes time that is not available*/
        result.push(date);  /* push in variable result the date  available */
      }
      // else if (stockOpeningFalse[i].recurring === true && !(date.toTimeString() >= stockOpeningFalse[i].startDate.toTimeString() && date.toTimeString() <= stockOpeningFalse[i].endDate.toTimeString() )) { /* withdraws the hours received or it is not available */
      //   result.push(date);
      // }
    }
  }
  date = new Date(date.getTime() + 30*60000) /* allows to separate the time slot by 30min */
}
  console.log(result);
  return result;/*  return the available time */
};
