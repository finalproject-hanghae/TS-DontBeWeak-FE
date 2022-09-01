import React from "react";

export const useFindWeek = (week:number) => {
  var value = [];
  var formatDate = function (date:Date) {
    var myMonth = date.getMonth() + 1;
    var myWeekDay = date.getDate();

    var addZero = function (num:any) {
      if (num < 10) {
        num = "0" + num;
      }
      return num;
    };
    var md = addZero(myMonth) + addZero(myWeekDay);

    return md;
  };

  var now = new Date();
  var nowDayOfWeek = now.getDay(); //요일 구하기
  var nowDay = now.getDate(); //일 구하기
  var nowMonth = now.getMonth(); //월 구하기
  var nowYear = now.getFullYear(); //연 구하기
  nowYear += (nowYear < 2000) ? 1900 : 0;

  if (week != 0) {
    var notNow = new Date(nowYear, nowMonth, nowDay - 7 * week * -1);
    nowDayOfWeek = notNow.getDay(); //요일 구하기
    nowDay = notNow.getDate(); //일 구하기
    nowMonth = notNow.getMonth(); //월 구하기
    nowYear = notNow.getFullYear(); //연 구하기
    nowYear += (nowYear < 2000) ? 1900 : 0;
  }

  var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
  var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
  value.push(nowYear + formatDate(weekStartDate));
  value.push(nowYear + formatDate(weekEndDate));

  return [value[0], value[1]];
};
