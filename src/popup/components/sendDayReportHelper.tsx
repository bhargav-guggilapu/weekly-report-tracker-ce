import moment from "moment";

export const sendDayReport = async (
  username,
  tasks,
  hours,
  customDate = moment().format("YYYY-MM-DD"),
  timeline = getCurrentTimeline()
) => {
  return await fetch(
    `https://weekly-report-manager-default-rtdb.firebaseio.com/${username}/${timeline}/${customDate}.json`,
    {
      method: "PUT",
      body: JSON.stringify({ tasks, hours }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const getCurrentTimeline = () => {
  const today = moment();
  const fromDate = today.day(today.day() >= 5 ? 5 : -2).format("YYYY-MM-DD");
  const toDate = today
    .add((4 - today.day() + 7) % 7, "days")
    .format("YYYY-MM-DD");
  return `${fromDate}_${toDate}`;
};

export const getTimelines = () => {
  const currentTimeline = getCurrentTimeline();
  let currentTimelineStart = currentTimeline.split("_")[0];
  const timelines = [currentTimeline];
  while (currentTimelineStart != "2023-04-14") {
    const toDate = moment(currentTimelineStart)
      .subtract(1, "days")
      .format("YYYY-MM-DD");
    const fromDate = moment(toDate).subtract(6, "days").format("YYYY-MM-DD");
    timelines.push(`${fromDate}_${toDate}`);
    currentTimelineStart = fromDate;
  }
  return timelines;
};
