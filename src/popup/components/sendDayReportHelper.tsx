import moment from "moment";

export const sendDayReport = async (username, entries, hours) => {
  const today = moment();
  const fromDate = today.day(today.day() >= 5 ? 5 : -2).format("YYYY-MM-DD");
  const toDate = today
    .add((4 - today.day() + 7) % 7, "days")
    .format("YYYY-MM-DD");
  return await fetch(
    `https://weekly-report-manager-default-rtdb.firebaseio.com/${username}/${fromDate}|${toDate}/${moment().format(
      "YYYY-MM-DD"
    )}|${moment().format("dddd")}.json`,
    {
      method: "POST",
      body: JSON.stringify({ tasks: entries, hours }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
