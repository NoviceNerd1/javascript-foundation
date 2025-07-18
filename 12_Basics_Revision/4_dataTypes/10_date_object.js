/*
 
 JS Date Object

  - The Date object is used to work with dates and times in JS.
  - It provides method for creating , accessing , and manipulating dates.

 */


// CREATING DATE OBJECT

// 1) Current date and time
const now = new Date();  // Creates object with current date/time
console.log("Date: ",now);  // Displays full current date/time string

// 2) From timestamp (milliseconds since Jan 1,1970 UTC)
const epoch = new Date(0);
console.log("Epoch:",epoch);

const dayAfterEpoch = new Date(24 * 3600 * 1000);
console.log("Day After Epoch: ",dayAfterEpoch);

const dayBeforeEpoch = new Date(-24 * 3600 * 1000);
console.log("Day Before Epoch: ",dayBeforeEpoch);


// 3) From date string (automatically parsed)
const dateFromString = new Date("2017-02-23");
console.log("Date from string: ",dateFromString); // will show local time equivalent
// Time defaults to midnight GMT , adjusted for local timezone


// 4) From components (local time zone)
const specificDate = new Date(2011, 0, 1); // Jan 1, 2011, 00:00:00
console.log("Specific Date: ",specificDate); 
// NOTE: months are 0-indexed (0-January)
const preciseDate = new Date(2011, 0, 1,2,3,4,567); // with time components
console.log("Precise Date:",preciseDate);



// --------------------
// Accessing Date Components

const date = new Date();

// Get methods (local time zone):
const year = date.getFullYear();  // 4 digit year
const month = date.getMonth();  // 0-11 (0-January)
const day = date.getDate();  // Day of month (1-31)
const hours = date.getHours();  // 0-23
const mins = date.getMinutes();  // 0-59
const secs = date.getSeconds();  // 0-59
const ms = date.getMilliseconds(); // 0-999
const dayOfWeek = date.getDay();  // 0-6 (0-Sunday)

console.log(`
date: ${date}
Year: ${year},
month: ${month}
day: ${day}
hours: ${hours}
mins: ${mins}
secs: ${secs}
millisec: ${ms};
Day Of Wekk: ${dayOfWeek}
`);


// UTC version:
const utcHours = date.getUTCHours();
console.log(utcHours);  // Hours in UTC +0 timezone


// Special methods
const timestamp = date.getTime();  // Milli seconds epoch
const timezoneOffset = date.getTimezoneOffset();

console.log(`
timestamp: ${timestamp},
time zone offset: ${timezoneOffset}
`)


// --------------------
// Setting date components


const today = new Date();

// Set methods (local time zone)
today.setFullYear(2021);  // Set year to 2021
today.setMonth(5);  // Set month to JUNE(0-11 - index)
today.setDate(15);  // set day of the month to 15th
today.setHours(12);  // set hour to 12 (noon)
today.setMinutes(23);  // set minutes to 23
today.setSeconds(22);  // set seconds to 22
today.setMilliseconds(123);  // Set ms to 123 (0-999)

console.log(today);

// UTC versions available

// set entire date using timestamp
today.setTime(2357643796437);
console.log(today);


// ----------------------
// AUTOCORRECTION

// Handles out-of-range values automatically
const autocorrected = new Date(2013,0,34); // 34-> 2 Feb 2013
console.log(autocorrected);

// Useful for date arithmetic
const dateArithmetic = new Date(2016, 1, 28);
dateArithmetic.setDate(dateArithmetic.getDate()+3); // Adds 3 days 
console.log(dateArithmetic);
// it also handles leap yaer automatically


// ------------------
// Date Arithmatic & Comparisions


// Dates can be converted ot numbers (timestamps)
const date1 = new Date();
const numericDate = +date1;  // same as date1.getTime()
console.log(numericDate)


// Date differences (in milliseconds)
const start = new Date();
// .... some opeations
for(let i=0; i<1000; i++){
	let a=0;
	a++;
}
const end= new Date();
const elasped = end-start;  

console.log(elasped);



// --------------------------
// Behncmarking & Perforance


// Best way to get current timestamp (fastest)
const currentTimestamp = Date.now();
console.log(currentTimestamp);

// Benhcmarking examples (compare two approaches)
function diffSubtract(date1,date2) {
	return date2-date1;
}


function diffGetTime(date1,date2) {
	return date2.getTime() - date1.getTime();
}

function bench(f) {
	const date1 = new Date(0);
	const date2 = new Date();
	const start = Date.now();
	for(let i =0; i < 1000000; i++) f(date1,date2);
	return Date.now() - start;
}


// Proper benhcmarking requires multiples runs

let time1 = 0, time2 = 0;
for(let i=0; i<10; i++){
	time1 += bench(diffSubtract);
	time2 += bench(diffGetTime);
}

console.log(`Total time for diffSubtract: ${time1}`);
console.log(`Total time for diffGetTime: ${time2}`);

// NOTE: getTime() is faster due to no type conversion



// ---------------------------
// Parsing DATES FROM STRINGS

// ISO 8601 format : YYYY-MM-DDTHH:MM:ss:sssZ

const parsedDate = Date.parse('2012-01-26T13:51:50.417-07:00')
console.log(parsedDate);


// Can create date directly from parsed string 
const fromParsed = new Date(Date.parse('2012-01-06'));
console.log(fromParsed);


// ----------------------
// High Precision Timing

// In browsers, microsecond precision
const microTime = performance.now();  // Millisecond with microsecond precision
console.log("Micro Time:",microTime)

// -------------------------
// Important Notes
/*
  1. Months are 0-indexed (0-Jan, 11-Dec)
  2. Days of week: 0=Sunday , 6= Saturday 
  3. Timestamps are in milliseconds (not seconds)
  4. Always use getFullYear() instead of deprecated getYear()
  5. Date object always contain both date and time components
  6. Be careful with timezone differences in applications
*/



/*
 * JS Date Object
 * */

console.log(now);

// Specific date(July 4, 2023 at 3:30 PM)
const independenceDay = new Date(2023, 6, 4,15, 30);
console.log('July 4, 2023 at 3:30 PM:',independenceDay);
// Note: Month is 6 (July) because months 0-indexxed

// From ISO string (timezone aware)
const meetingTime = new Date('2023-12-15T09:00:00-05:00')
console.log('Meeting in New Your:',meetingTime);


// UTC Version of now
console.log('UTC Hours:',now.getUTCHours());
// Depends on your timezone offset


// set last day of feb(handle leap year)
const lastFebDay = new Date(2023,1,29);
console.log('Leap day:', lastFebDay);


// Autocorrection example
const invalidDate = new Date(2023, 1, 30);
console.log("AutoCOrrected date:",invalidDate);



// -----------------------
// DATE ARITHMETIC

// calculate difference between dates
const startDate = new Date(2023, 0, 1);
const endDate = new Date(2023, 11, 31);
const diffInMs = endDate - startDate;  // difrence in Millisecond
const diffInDays = diffInMs/ (1000* 60* 60*24);
console.log(`
Difference in ms: ${diffInMs}
Days b/w Dates: ${diffInDays}
`);


// Compare Dates
//const today = new Date();
console.log(today);
const newYear = new Date(today.getFullYear() +1, 0,1);
if(today< newYear) {
	console.log('New year is coming!');
}



// -------------------------
// Formatting Dates

// Basic Formatting
console.log(`
Formatted Dates:
ISO String: ${now.toISOString()}
Locale String: ${now.toLocaleString()}
Date String: ${now.toDateString()}
Time String: ${now.toTimeString()}
`);


// Custom formatting
function formatDate(date) {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const months= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const dayName = days[date.getDay()];
	const monthName = months[date.getMonth()];
	const hours = date.getHours().toString().padStart(2,'0');
	const mins =date.getMinutes().toString().padStart(2,'0');
	
	return `${dayName}, ${monthName}, ${monthName} ${date.getDate()} ${date.getFullYear()} ${hours}:${mins}`;
}

console.log('Custom format:',formatDate(now));




// ----------------------------
// TIMEZONE HANDLING


console.log('\nTimezone Handling');
console.log('My Timezone offset:',now.getTimezoneOffset(), 'minutes');
// Negative values are timezones ahead of UTC

// Convert to another timezone (ex: New York)
function toTimeZone(date,timeZone) {
	return new Date(date.toLocaleString('en-US',{timeZone}));
}
const nyTime = toTimeZone(now, 'America/New_York');
console.log('New York time:',nyTime);


// ---------------------
// COUNTDOWN TIMER EX

function createCountdown(targetDate){
	return function(){
		const now = new Date();
		const diff = targetDate - now;

		if(diff<= 0) return 'Countdown expired!';

		const days = Math.floor(diff/(1000 * 60 * 60 * 24));
		const hours = Math.floor((diff% (1000 * 60 * 60 * 24))/(1000* 60* 60));
		const mins = Math.floor((diff% (1000* 60 * 60))/ (1000* 60));
		const secs = Math.floor((diff%(1000* 60))/ 1000);


		return `${days}d ${hours}h ${mins}m ${secs}s remaining`;
	};
} 

const nextChristmas = new Date(now.getFullYear(), 11, 25);
const getCountdown = createCountdown(nextChristmas);
console.log('\nChristmas Countdown:',getCountdown());


// ---------------------------
// Benchmarking Example


function heavyCalculation(){
	let result =0;
	for(let i=0; i< 1000000; i++){
		result += Math.sqrt(i) * Math.random();
	}
	return result;
}

function benchmark(fn, times=10) {
	const start = performance.now();
	for(let i=0; i<times; i++){
		fn();
	}
	const end = performance.now();
	return (end-start)/times;
}


const avgTime= benchmark(heavyCalculation);
console.log('\nBenchmark Result:');
console.log(`Average execution time: ${avgTime.toFixed(2)}ms`);


// ---------------------
// Working with timestamps

// Convert between Date and timestamp
const timestamps = Date.now();
console.log('\nCurrent timestamp: ', timestamp);

const dateFromTimestamp = new Date(timestamp);
console.log('Date from timestamp: ',dateFromTimestamp);


// Unix timestamp (seconds instead of milliseconds)
const unixTimestamp = Math.floor(Date.now()/1000);
console.log('Unix timestamp:',unixTimestamp);


// ------------------------
// 10) Date Validation

function isValidDate(date){
	return date instanceof Date && !isNaN(date);
}


const goodDate = new Date('2023-12-25');
const badDate = new Date('invalid date');

console.log('\nDate Validation: ');
console.log('Valid date:',isValidDate(goodDate));
console.log('Invalid Date:',isValidDate(badDate));















