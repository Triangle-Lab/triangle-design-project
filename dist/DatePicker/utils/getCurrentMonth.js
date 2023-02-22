var getCurrentMonth = function getCurrentMonth(props) {
  var year = props.year,
    month = props.month;
  var firstDay = new Date(year, month - 1, 1);
  var firstDayWeekDay = firstDay.getDay();
  var monthData = [];
  var lastMonth = month - 1;
  if (lastMonth === 0) {
    lastMonth = 12;
  }
  var nextMonth = month + 1;
  if (nextMonth === 13) {
    nextMonth = 1;
  }
  var lastMonthLastDay = new Date(year, lastMonth, 0); // last day of last month
  var lastMonthLastDayDate = lastMonthLastDay.getDate(); // last day of last month
  var nextMonthFirstDay = new Date(year, nextMonth - 1, 1); // first day of next month
  var nextMonthFirstDayDate = nextMonthFirstDay.getDate(); // first day of next month

  if (firstDayWeekDay > 0) {
    // when first day is not Sunday
    for (var i = 0; i < firstDayWeekDay; i++) {
      monthData.push({
        date: lastMonthLastDayDate - firstDayWeekDay + i + 1,
        isCurrentMonth: false
      });
    }
  }
  var currentMonthLastDay = new Date(year, month, 0);
  var currentMonthLastDayDate = currentMonthLastDay.getDate();
  for (var _i = 1; _i <= currentMonthLastDayDate; _i++) {
    // when first day is Sunday
    monthData.push({
      date: _i,
      isCurrentMonth: true
    });
  }
  var lastDayWeekDay = new Date(year, month - 1, currentMonthLastDayDate).getDay();
  if (lastDayWeekDay < 6) {
    for (var _i2 = 0; _i2 < 6 - lastDayWeekDay; _i2++) {
      // when last day is not Saturday
      monthData.push({
        date: nextMonthFirstDayDate + _i2,
        isCurrentMonth: false
      });
    }
  }
  return monthData;
};
export default getCurrentMonth;