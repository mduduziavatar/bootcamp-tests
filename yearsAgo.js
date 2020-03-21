function getDay(item) {
  var date = new Date(item);
  var weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  var x = date.getDay()
  return weekDays[x]
  }
