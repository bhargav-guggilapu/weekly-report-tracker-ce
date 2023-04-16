import moment from "moment";

chrome.alarms.onAlarm.addListener((alarm) => {
  const now = new Date();
  const dayOfWeek = now.getDate();
  if (alarm.name == "notification" && dayOfWeek >= 1 && dayOfWeek <= 5) {
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
      when: moment(request.time, "HH:mm").valueOf(),
      periodInMinutes: 24 * 60,
    });
  }
});
