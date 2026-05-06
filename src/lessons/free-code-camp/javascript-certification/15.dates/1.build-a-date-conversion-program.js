const currentDate = new Date();

const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

const formatDateMMDDYYYY = (date) => {
  const month = date.toLocaleDateString("en-US", { month: "numeric" });
  const day = date.toLocaleDateString("en-US", { day: "numeric" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
};

const formatDateLong = (date) => {
  const formatted = date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return `Formatted Date (Month Day, Year): ${formatted}`;
};