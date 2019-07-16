const updateBodyClass = (name) => {
  const bodyClass = name.replace(/[/]/gi, '').toLowerCase();
  document.body.classList.toggle(bodyClass);
}

const ms_second = 1000;
const ms_minute = 60000;
const ms_hour = 3600000;
const ms_day = 86400000;

const getTime = (ms_diff, days = 0, hours = 0, minutes = 0, seconds = 0) => {
  if (ms_diff > ms_day) {
    days += 1;
    ms_diff -= ms_day;
    return getTime(ms_diff, days);
  } else if (ms_diff > ms_hour) {
    hours += 1;
    ms_diff -= ms_hour;
    return getTime(ms_diff, days, hours);
  } else if (ms_diff > ms_minute) {
    minutes += 1;
    ms_diff -= ms_minute;
    return getTime(ms_diff, days, hours, minutes);
  } else if (ms_diff > ms_second) {
    seconds += 1;
    ms_diff -= ms_second;
    return getTime(ms_diff, days, hours, minutes, seconds);
  }
  return {
    days,
    hours,
    minutes,
    seconds
  }
} 

const getDateDifference = (time) => {
  let msDiff = new Date() - new Date(time);
  const timeObj = getTime(msDiff);
  if (timeObj.days === 0) {
    if (timeObj.hours === 0) {
      if (timeObj.minutes === 0) {
        return timeObj.seconds + "s"
      } else {
        return timeObj.minutes + "m";
      }
    } else {
      return timeObj.hours + "h " + timeObj.minutes + "m";
    }
  } else {
    return timeObj.days + "d " + timeObj.hours + "h";
  }
}

export { updateBodyClass, getDateDifference };
