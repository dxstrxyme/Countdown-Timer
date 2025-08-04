let countdownDate = new Date("Jul 30,2025 00:00:00").getTime();

function format(value) {
  return value < 10 ? "0" + value : value;
}

function pluralaze(value, singular, plural) {
  return value === 1 ? singular : plural;
}

let interval = setInterval(() => {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  if (distance <= 0) {
    clearInterval(interval);
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").textContent = format(days);
  document.querySelector(".hours").textContent = format(hours);
  document.querySelector(".minutes").textContent = format(minutes);
  document.querySelector(".seconds").textContent = format(seconds);

  document.querySelector(".days-text").textContent = pluralaze(
    days,
    "day",
    "days"
  );
  document.querySelector(".hours-text").textContent = pluralaze(
    hours,
    "hour",
    "hours"
  );
  document.querySelector(".minutes-text").textContent = pluralaze(
    minutes,
    "minute",
    "minutes"
  );
  document.querySelector(".seconds-text").textContent = pluralaze(
    seconds,
    "second",
    "seconds"
  );
}, 1000);
