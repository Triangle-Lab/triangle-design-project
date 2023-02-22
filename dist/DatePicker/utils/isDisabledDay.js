var isDisabledDay = function isDisabledDay(date, disabledDateRange) {
  var year = date.year,
    month = date.month,
    day = date.day;
  var _ref = disabledDateRange || {},
    start = _ref.start,
    end = _ref.end;
  // 如果开始时间晚于结束时间，抛出错误
  if (start && end) {
    var startDate = new Date(start.year, start.month, start.day);
    var endDate = new Date(end.year, end.month, end.day);
    if (startDate > endDate) {
      throw new Error('Error: RangeDatePicker start date should not be later than end date!__TriangleDesign');
    }
  }
  if (start && end) {
    var _startDate = new Date(start.year, start.month, start.day);
    var _endDate = new Date(end.year, end.month, end.day);
    var currentDate = new Date(year, month, day);
    if (currentDate >= _startDate && currentDate <= _endDate) {
      return true;
    }
  }
  return false;
};
export default isDisabledDay;