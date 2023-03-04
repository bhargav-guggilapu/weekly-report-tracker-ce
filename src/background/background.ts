import { sendDayReport } from "../popup/components/sendDayReportHelper";

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name == "notification") {
    chrome.storage.local.get((res) => {
      let notificationMessage = "";
      if (res.entries?.length > 0) {
        notificationMessage = "Don't forgot to add remaining tasks";
      } else {
        notificationMessage = "It's time to fill your daily report";
      }
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "Weekly Report",
        message: notificationMessage,
        silent: false,
        requireInteraction: true,
      });
    });
  }
});

chrome.runtime.onMessage.addListener(function (request) {
  if (request.time) {
    chrome.alarms.create("notification", {
      when: getAlarmTime(request.time),
      periodInMinutes: 24 * 60,
    });
  }
});

const getAlarmTime = (time) => {
  const now = new Date();
  const dayOfWeek = now.getDate();
  const hours = parseInt(time.split(":")[0]);
  const minutes = parseInt(time.split(":")[1]);
  const seconds = 0;
  const milliseconds = 0;

  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    const alarmTime = new Date();
    alarmTime.setHours(hours, minutes, seconds, milliseconds);
    if (alarmTime <= now) {
      alarmTime.setDate(alarmTime.getDate() + 1);
    }
    return alarmTime.getTime();
  } else {
    return -1;
  }
};

var clearTime = new Date();
clearTime.setHours(23);
clearTime.setMinutes(59);
clearTime.setSeconds(59);
clearTime.setMilliseconds(0);

var timeUntilClear = clearTime.getTime() - Date.now();

setTimeout(function () {
  chrome.storage.local.get((res) => {
    if (res.username) {
      sendDayReport(res.username, res.entries || [], res.hours || 0);
    }
    chrome.storage.local.set({
      filledToday: false,
      entries: null,
    });
  });
  clearTime.setDate(clearTime.getDate() + 1);
  timeUntilClear = clearTime.getTime() - Date.now();
  setTimeout(arguments.callee, timeUntilClear);
}, timeUntilClear);
