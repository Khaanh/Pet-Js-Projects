const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2021, 3, 18, 12, 30, 0);
let year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
let weekday = weekdays[futureDate.getDay()];
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let seconds = futureDate.getMonth();
let date = futureDate.getDate();
let futureTime = futureDate.getTime();


function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);

  let hours = t / oneHour;
  console.log(hours);
  console.log(days);
}
getRemainingTime()

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}: ${minutes}am`;