export default function GetTime() {
    var date = new Date()
  var hrs = date.getHours();
  var mins = date.getMinutes();
  var amorpm = hrs >= 12 ? "PM" : "AM";
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;
  mins = mins < 10 ? "0" + mins : mins;
  var formattedTime = hrs + ":" + mins + " " + amorpm;
  return formattedTime;
}

