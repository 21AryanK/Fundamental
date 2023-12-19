const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formateDate = (unformatedDate) => {
  const date = unformatedDate.getDate();
  const month = months[unformatedDate.getMonth()];
  const year = unformatedDate.getFullYear();
  return `${date} ${month} ${year}`;
};

export { formateDate };
