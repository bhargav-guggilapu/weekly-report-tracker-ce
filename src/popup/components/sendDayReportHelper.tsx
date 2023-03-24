import moment from "moment";

export const sendDayReport = async (username, tasks, hours, timeline?) => {
  return await fetch(
    `https://weekly-report-manager-default-rtdb.firebaseio.com/${username}/${getCurrentTimeline()}/${
      timeline || moment().format("YYYY-MM-DD") + "|" + moment().format("dddd")
    }.json`,
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
