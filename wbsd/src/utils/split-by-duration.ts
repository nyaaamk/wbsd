import dayjs from "dayjs";

enum DURATION_TYPES  {
  HOUR = "HOUR",
  MINUTE = "MINUTE"
}

type entryTypeWithLb = { // with lunchBreak
	lunchBreakStart: string;
	lunchBreakEnd: string;
	durationType: string;
	duration: number;
	timeTables: {
		weekDay: number;
		open: string;
		close: string;
	}[];
};

type entryType = {
	start: Date;
	end: Date;
	durationType: string;
	duration: number;
};

const splitter = (start: string, end: string, duration: number) => {
  let _start = dayjs(start).toISOString();
  const _end = dayjs(end);

  const times = [dayjs(_start).toISOString()] as string[];

  let diff = dayjs(_end).diff(_start, "minute");

  const pusher = () => {
    _start = dayjs(_start).add(duration, "minutes").toISOString();
    diff = dayjs(_end).diff(_start, "minute");
    times.push(dayjs(_start).toISOString());
  };

  for (let i = duration; diff >= duration; ) {
    if (diff >= i) {
      pusher();
    }
  }

  return times;
};

export const splitByDurationWithLb = (entry: entryTypeWithLb) => {
  const splits = [] as { weekDay: number; open: string; close: string; times: string[] }[];

  entry.timeTables.forEach((table) => {
    let duration = entry.duration;
    switch (entry.durationType) {
      case (DURATION_TYPES.MINUTE): {
        break;
      }
      case (DURATION_TYPES.HOUR): {
        duration = entry.duration * 60;
        break;
      }
      default:
    }

    const beforeLunchEnd = entry.lunchBreakStart;
    const afterLunchEnd = table.close;

    const times = [
      ...splitter(table.open, beforeLunchEnd, duration),
      ...splitter(entry.lunchBreakEnd, afterLunchEnd, duration)
    ];

    splits.push({
      weekDay: table.weekDay,
      open   : dayjs(table.open).toISOString(),
      close  : dayjs(table.close).toISOString(),
      times
    });
  });

  return splits;
};

export const splitByDuration = (entry: entryType) => {
  const { start, end, durationType, duration: _duration } = entry;
  if (!_duration) return;

  let duration = _duration;
  switch (durationType) {
    case (DURATION_TYPES.MINUTE): {
      break;
    }
    case (DURATION_TYPES.HOUR): {
      duration = _duration * 60;
      break;
    }
    default:
  }

  let _start = dayjs(start);
  const _end = dayjs(end).subtract(duration, "minute");

  const times = [_start.toDate()] as Date[];

  let diff = dayjs(_end).diff(_start, "minute");

  const pusher = () => {
    _start = dayjs(_start).add(duration, "minutes");
    diff = dayjs(_end).diff(_start, "minute");
    times.push(dayjs(_start).toDate());
  };

  for (let i = duration; diff >= duration;) {
    if (diff >= i) {
      pusher();
    }
  }

  return times;
};

export const skipDays = (startDate: Date, endDate: Date, daysToSkip?: string[]) => {
  let dates = [] as Date[];

  let currentDate = startDate;
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = dayjs(currentDate).add(1, "day").toDate();
  }

  if (daysToSkip?.length) {
    dates = dates.filter((d) => !daysToSkip.find((s) => s === `${dayjs(d).day()}`));
  }

  return dates;
};