import dayjs from "dayjs";

export const getHHmmssDuration = (start: Date, end: Date) => {
  const ms = dayjs(end).diff(start, "milliseconds");
  let min = Math.floor((ms/1000/60) << 0);
  const sec = Math.floor((ms/1000) % 60);

  let duration = `${min}:${sec}`;

  const checkHour = parseInt(`${min / 60}`, 10);
  if (checkHour >= 1) {
    const hour = checkHour * 60;
    min -= hour;
    duration = `${hour / 60}:${min}:${sec}`;
  }

  return duration.split(":").map((d) => d.padStart(2, "0")).join(":");
};