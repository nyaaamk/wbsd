export const excludeWeekend = (date: Date, days: number) => {
  date.setDate(date.getDate());
  let counter = 0;
  if (days > 0) {
    while (counter < days) {
      date.setDate(date.getDate() + 1); // Add a day to get the date tomorrow
      const check = date.getDay(); // turns the date into a number (0 to 6)
      if (check === 0 || check === 6) {
        // Do nothing it's the weekend (0=Sun & 6=Sat)
      } else {
        counter++; // It's a weekday so increase the counter
      }
    }
  }
  return date;
};