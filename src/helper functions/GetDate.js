export default function GetDate() {
  const date = new Date();
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate();
  const monthNames = [
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
  const monthName = monthNames[monthIndex];
  const formattedDate = `${day} ${monthName} ${year}`;
  return formattedDate;
}
