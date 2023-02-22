// 接收参数 year:number ，获取当前年代十年的年份，即如果输入 2019 ，则返回 [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]

var getYears = function getYears(year) {
  var years = [];
  // 获取个位数
  var decade = year % 10;
  var firstYear = year - decade;
  for (var i = 0; i < 10; i++) {
    years.push(firstYear + i);
  }
  return years;
};
export default getYears;