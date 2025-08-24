/**
 * SCHEDULING: setTimeout AND setInterval
 *
 * Allows executing functions not immediately, but after a specified time delay.
 * These methods are environment-specific (browsers/Node.js) and not part of core JS.
 */

// setTimeout : Execute a function ONCE after delay

/*
 * Syntax:
 * let timerId = setTimeout(func|code , [delay], [arg1], [arg2], ...);
 *
 * Parameters:
 *  - func|code: Function or code string to execute (string is deprecated)
 *  - delay: Delay in ms (default: 0)
 *  - arg1, arg2, ... : Arguments passed to the function
 * */

// Basic Example
function sayHi() {
  console.log("Hello setTimeout after 1000ms");
}

setTimeout(sayHi, 1000); // Runs after 1 second

// Example with arguments
function greet(phrase, who) {
  console.log(phrase + " " + who);
}
setTimeout(greet, 2000, "Hello", "John"); // "Hello John" after 2s

/**
 * Important Notes:
 * 1. Don't call the function immediately by adding ():
 *    setTimeout(sayHi(), 1000); // WRONG - passes undefined (sayHi's return value)
 *
 * 2. String code is possible but deprecated:
 *    setTimeout("console.log('Hello')", 1000); // Avoid this
 *    Prefer arrow functions: setTimeout(() => console.log('Hello'), 1000);
 */

// Cancelling with clearTimeout

/*
 * setTimeout returns a timer ID that can be used to cancel execution
 * */

let timerId = setTimeout(() => console.log("This will run"), 1000);
clearTimeout(timerId);

// Note: timerId isn't nullified after clearing (browsers use numbers, Node.js may use objects)

// setInterval : Execute function REPETEADLY with fixed delay between starts

/*
 * Same syntax as setTimeout, but repeats after execution
 * let timerId = setInterval(func|code, [delay], [arg1],[arg1], ...);
 * */

// example : Runs every 2 seconds stops after 5 seconds
let intervalId = setInterval(() => console.log("tick"), 2000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("stop");
}, 6000);

/**
 * Alert Behavior Note:
 * In most browsers, timer keeps running during alert/confirm/prompt
 * So if you don't dismiss alert, next interval may fire immediately
 */

// Nested setTimeout VS setInterval

/**
 * Alternative to setInterval - recursive setTimeout:
 * More flexible as next call can be adjusted based on current results
 */

let recursiveTimerId = setTimeout(function tick() {
  console.log("tick tick");
  recursiveTimerId = setTimeout(tick, 2000);
}, 2000);

setTimeout(() => clearTimeout(recursiveTimerId), 10000);

/**
 * Advantages over setInterval:
 * 1. Can adjust delay dynamically (e.g., backoff for server overload)
 * 2. Guarantees fixed delay between executions (setInterval doesn't account for execution time)
 *
 * Example with dynamic delay:
 */

let delay = 5000;

let dynamicTimerId = setTimeout(function request() {
  if (/* server overload */ false) {
    delay *= 2; // exponential backoff
  }
  // schedule next run using updated delay
  dynamicTimerId = setTimeout(request, delay);
}, delay);

// stop after 10s
setTimeout(() => clearTimeout(dynamicTimerId), 10000);

// Garbage Collection Consideration

/**
 * Scheduled functions stay in memory until:
 * - Executed (for setTimeout)
 * - Cleared (for setInterval)
 *
 * They hold references to outer variables, so cancel timers when no longer needed
 * to prevent memory leaks.
 */

// Zero-delay setTimeout

/**
 * setTimeout(func, 0) or setTimeout(func) schedules execution after current script
 * Useful to defer execution to "right after" current operations
 */

setTimeout(() => console.log("World"));
console.log("Hello");

/**
 * Browser Limitation:
 * After 5 nested timers, minimum 4ms delay is enforced
 * (Historical reasons, doesn't apply in Node.js)
 */

// Demo of browser minimum delay:
let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start);
  if (start + 100 < Date.now()) {
    console.log(times);
  } else {
    setTimeout(run);
  }
});

// =============================================
// Important Summary Points
// =============================================

/**
 * 1. Timers don't guarantee exact timing due to:
 *    - CPU load
 *    - Browser tab in background
 *    - Power saving modes
 *    (Minimum delay may increase to 300-1000ms in some cases)
 *
 * 2. Key Differences:
 *    - setTimeout: Runs once after delay
 *    - setInterval: Runs repeatedly starting after delay
 *    - Nested setTimeout: More flexible alternative to setInterval
 *
 * 3. Always clean up timers when not needed to prevent memory leaks
 */

// 1 Real world setTimeout Examples

// A.User Notification Auto-close

// Show a temporary success message that disappears after 3 seconds

function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  notification.style.background = "blue";
  document.body.appendChild(notification);

  // auto remove after 3 sec
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

showNotification("Payment successful!");

// B. Debouncing search Input (Delayed API call)

let searchTimeout;

function handleSearchInput(query) {
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    if (!query.trim()) {
      document.getElementById("results").innerHTML = "";
      return;
    }

    // Example: Fetching from GitHub public API instead of local file
    fetch(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(
        query
      )}`
    )
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        return response.json();
      })
      .then((data) => {
        const items = data.items || [];
        document.getElementById("results").innerHTML = items
          .map(
            (repo) =>
              `<p><a href="${repo.html_url}" target="_blank">${repo.full_name}</a></p>`
          )
          .join("");
      })
      .catch((err) => {
        console.error("Search failed:", err);
        document.getElementById(
          "results"
        ).innerHTML = `<p style="color:red">Error: ${err.message}</p>`;
      });
  }, 500);
}

document.getElementById("search-box").addEventListener("input", (e) => {
  handleSearchInput(e.target.value);
});

/*
 * ✅ Use Case:

Prevents excessive API calls while typing.

Waits until the user stops typing for 500ms before searching.
 * */

// 2. Real-world setInterval Examples

//A. Live Data Polling (stock prices)

// let pollingInterval;
// const logEl = document.getElementById("log");

// function fetchStockPrice(symbol) {
//   fetch("https://api.stocks.com/${symbol}")
//     .then((response) => response.json())
//     .then((data) => {
//       logEl.textContent = `Latest ${symbol} price: $${data.price}`;
//       console.log();
//     })
//     .catch((error) => {
//       console.error("Failed to fetch stock:", error);
//       logEl.innerHTML = `<span class="error">Error fetching stock. Retrying in 10s...</span>`;
//       clearInterval(pollingInterval);
//       pollingInterval = setInterval(() => fetchStockPrice(symbol), 10000);
//     });
// }

// // start polling every 2 seconds
// pollingInterval = setInterval(() => fetchStockPrice("AAPL"), 2000);

// // stop polling after 1 minute
// setTimeout(() => {
//   clearInterval(pollingInterval);
//   logEl.innerHTML += "<br><strong>Stopped Stock price updates.</strong>";
//   console.log("Stopped Stock Price updates.");
// // }, 60000);
// const apiKey = "demo"; // Replace with your Alpha Vantage API key
// const symbol = "IBM"; // Change to desired stock ticker
// const interval = "5min";
// const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;

// async function fetchStockData() {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//     const data = await response.json();
//     console.log(data);

//     const timeSeries = data["Time Series (5min)"];
//     if (timeSeries) {
//       const latestTime = Object.keys(timeSeries)[0];
//       const latestPrice = timeSeries[latestTime]["1. open"];
//       document.getElementById(
//         "output"
//       ).innerText = `Latest ${symbol} price: $${latestPrice} (as of ${latestTime})`;
//     } else {
//       document.getElementById("output").innerText = "No data available.";
//     }
//   } catch (error) {
//     console.error("Fetch error:", error);
//     document.getElementById("output").innerText = "Failed to fetch data.";
//   }
// }

// // Poll every 2 seconds
// let pollingInterval = setInterval(fetchStockData, 2000);

// // Stop after 1 minute
// setTimeout(() => {
//   clearInterval(pollingInterval);
//   console.log("Stopped stock price updates.");
// }, 60000);

// // Initial fetch
// fetchStockData();

("use strict");

const API_KEY = "demo"; // replace with your key
const SYMBOL = "IBM";
const INTERVAL = "5min";
const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${SYMBOL}&interval=${INTERVAL}&apikey=${API_KEY}`;

async function fetchStockData() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);

    const timeSeries = data[`Time Series (${INTERVAL})`];
    if (!timeSeries) throw new Error("Invalid data format");

    const latestTime = Object.keys(timeSeries)[0];
    const latestPrice = timeSeries[latestTime]["1. open"];

    document.getElementById("stockPrice").innerText = `$${latestPrice}`;
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

// Fetch immediately and then every 60 seconds
fetchStockData();
setInterval(fetchStockData, 60000);

/*
✅ Use Case:

Real-time data updates (e.g., stock tickers, crypto prices).

Adjusts polling rate based on errors.
*/

// B. Countdown Timer

let timeLeft = 30; // 30- second countdown
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  countdownElement.textContent = `Time left: ${timeLeft}s`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    countdownElement.textContent = "Time Expired!";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
updateCountdown(); // Initial call to show the timer immediately

/*
✅ Use Case:

Timers in quizzes, auctions, or OTP expiration.
*/

// Backoff Retry using "SCHEDULING"

// let retryDelay = 1000; // start with 1s delay
// const MAX_RETRY_DELAY = 30000; // MAX 30s delay

// const statusEl = document.getElementById("status");
// const retryDelayEl = document.getElementById("retryDelay");

// function fetchDataWithRetry() {
//   statusEl.textContent = "Fetch data...";
//   fetch("API ADDRESS")
//     .then((response) => {
//       if (!response.ok) throw new Error("API Error:" + response.status);
//       return response.json();
//     })
//     .then((data) => {
//       statusEl.textContent =
//         "Data fetched Successfully: " + JSON.stringify(data);
//       retryDelay = 1000; // reset delay on success
//       retryDelayEl.textContent = "";
//       // If u want to keep polling, call fetchDataWithRetry again here or use setInterval
//     })
//     .catch((error) => {
//       statusEl.textContent = "Fetch failed: " + error.message;
//       retryDelayEl.textContent = `Retrying in ${retryDelay / 1000} seconds...`;
//       retryDelay = Math.min(retryDelay * 2, MAX_RETRY_DELAY); // Exponential backoff
//       setTimeout(fetchDataWithRetry, retryDelay);
//     });
// }

// fetchDataWithRetry();

let retryDelay = 1000; // Start with 1s delay
const MAX_RETRY_DELAY = 30000; // Max 30s delay

const statusEl = document.getElementById("status");
const retryDelayEl = document.getElementById("retryDelay");
const resultsEl = document.getElementById("results");

const url =
  "https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1";

const headers = {
  "x-rapidapi-host": "movie-database-alternative.p.rapidapi.com",
  "x-rapidapi-key": "YOUR_RAPIDAPI_KEY_HERE", // <-- Replace with your RapidAPI key
};

async function fetchDataWithRetry() {
  statusEl.textContent = "Fetching movie data...";

  try {
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`API error: ${res.status}`);

    const data = await res.json();
    statusEl.textContent = "Data fetched successfully.";
    retryDelayEl.textContent = "";
    retryDelay = 1000; // Reset delay on success

    if (data.Search && data.Search.length > 0) {
      resultsEl.innerHTML = data.Search.map(
        (movie) => `<div><strong>${movie.Title}</strong> (${movie.Year})</div>`
      ).join("");
    } else {
      resultsEl.textContent = "No movies found.";
    }
  } catch (error) {
    statusEl.textContent = `Fetch failed: ${error.message}`;
    retryDelayEl.textContent = `Retrying in ${retryDelay / 1000} seconds...`;
    retryDelay = Math.min(retryDelay * 2, MAX_RETRY_DELAY); // exponential backoff
    setTimeout(fetchDataWithRetry, retryDelay);
  }
}

fetchDataWithRetry();
