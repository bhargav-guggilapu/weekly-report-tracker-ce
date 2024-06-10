import moment from "moment";

export const sendDayReport = async (
  username,
  tasks,
  hours,
  date = moment().format("MM-DD-YYYY"),
  timeline = getCurrentTimeline()
) => {
  return await fetch(
    `https://weekly-report-manager-default-rtdb.firebaseio.com/${timeline}/${username}/${date}.json`,
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
  const fromDate = today.day(today.day() >= 1 ? 1 : -6).format("MM-DD-YYYY");
  const toDate = today.day(today.day() <= 5 ? 5 : 12).format("MM-DD-YYYY");
  return `${fromDate}_${toDate}`;
};

export const getTimelines = () => {
  const currentTimeline = getCurrentTimeline();
  let currentTimelineStart = currentTimeline.split("_")[0];
  const timelines = [currentTimeline];
  while (currentTimelineStart != "06-03-2024") {
    const toDate = moment(currentTimelineStart, 'MM-DD-YYYY')
      .subtract(1, "days")
      .format("MM-DD-YYYY");
    const fromDate = moment(toDate, 'MM-DD-YYYY').subtract(6, "days").format("MM-DD-YYYY");
    timelines.push(`${fromDate}_${toDate}`);
    currentTimelineStart = fromDate;
  }
  return timelines;
};
