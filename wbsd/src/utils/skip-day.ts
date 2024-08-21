import dayjs from "dayjs";

export const skipDay = (startDate: Date, endDate: Date, daysToSkip: string[]) => {
  const dates = [] as Date[];

  let currentDate = startDate;
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = dayjs(currentDate).add(1, "day").toDate();
  }

  const skipped = dates.filter((d) => !daysToSkip.find((s) => s === `${dayjs(d).day()}`));

  return skipped;
};