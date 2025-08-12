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




// ----------------------------
// Additional creation methods

// Using Date.UTC() - creates timestamps for UTC time

const utcDate = new Date(Date.UTC(2023, 6,4,15,30));
console.log('UTC Date: ', utcDate.toISOString());
console.log('UTC Date: ', utcDate);  // prints same


// from unix timestamps (seconds)

const unixTimeStamp = 1689987600; // seconds since epoch
const dateFromUnix = new Date(unixTimeStamp * 1000);
console.log('Date from unix timestamp: ', dateFromUnix);


// -----------------------------
// High-resolution Time


// performance.now() - microsecond precision, not affected by system clock changes
let num =1;
const perfStart = performance.now();
// Do some work ...
for(let i=0;i<1000000;i++) num+=1;
const perfEnd = performance.now();
console.log(`Operation took ${(perfEnd - perfStart).toFixed(3)}ms`);

console.log('hrTime:', process.hrtime()); //- in node.js for nanosecond precision
// (not available in browser)


// -------------------------
// Internatinalizatin (INTL)

// advanced formatting with Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat('de-DE',{
	weekday:'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	timeZone: 'Europe/Berlin'
});

console.log('German Format:',formatter.format(new Date()));

// List of supported time zones
//console.log('Available timezones:',Intl.supportedValuesOf('timeZone'));


// -------------------------
// Date ranges and validation

// JS date range limitations
const minDate = new Date(-8640000000000000); // Earliest valid date
const maxDate = new Date(8640000000000000); // lastest valid date

console.log(`
Earliest Date: ${minDate}
Latest date: ${maxDate}
`)


// Checking for invalid dates
/*function isValidDate(d) {
  return d instanceof Date && !isNaN(d) && 
         d.getTime() > minDate.getTime() && 
         d.getTime() < maxDate.getTime();
}
*/
// ---------------------------
// Daylight savings time (DST) handling

// deteting DST changes
function isDST(date = new Date()){
	const jan = new Date(date.getFullYear(), 0, 1);
	const jul = new Date(date.getFullYear(), 6, 1);
	const stdOffSet= Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
	return date.getTimezoneOffset() < stdOffSet;
}

console.log('Is DST in effect now?',isDST());



// --------------------------
// Additional date calculations

// calculate week number (ISO 8601)
function getWeekNumber(date){
	const d= new Date(date);
	d.setHours(0,0,0,0);
	d.setDate(d.getDate() + 3 - (d.getDay()+6)%7);
	const week1 = new Date(d.getFullYear(), 0,4);

	return 1 + Math.round(((d - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}


console.log('Current week number:', getWeekNumber(new Date()));


// calculate age in years

function calculateAge(birthDate){
	const now = new Date();
	let age = now.getFullYear() - birthDate.getFullYear();
	const monthDiff = now.getMonth() - birthDate.getMonth();
	if(monthDiff < 0 || (monthDiff ===0 && now.getDate() < birthDate.getDate())){
		age--;
	}

	return age;
}

console.log('My age:',calculateAge(new Date(2002,06,15)))


// --------------------------
// Timezone conversion best practices

// always work in UTC for server side operations
const serverTime = new Date().toISOString();
console.log('Server Time (UTC):',serverTime);


// convert to local time only for display
const localTime = new Date(serverTime).toLocaleString();
console.log('Local time:',localTime);

// Using libraries for complex timezone handling (recommended)
// moment-timezone, date-fns-tz, Luxon, etc.



// ============= 11. RECOMMENDED LIBRARIES =============

// For complex date operations, consider:
// - Luxon (modern, Intl-based)
// - date-fns (modular)
// - Day.js (lightweight)
// - Moment.js (legacy, not recommended for new projects)

// ============= 12. TEMPORAL API (FUTURE) =============

// Coming soon - Temporal is a new date/time API proposal
// Currently in Stage 3 of TC39 process
// Will provide better date/time handling when implemented

// Example (when available):
// const date = Temporal.PlainDate.from('2023-07-20');
// console.log(date.day); // 20


/* 
Key Additional Concepts Covered:

1	UTC vs Local Time:
	◦	Date.UTC() vs regular constructor
	◦	Importance of timezone awareness
2	High-Resolution Timing:
	◦	performance.now() for microsecond precision
	◦	Node.js process.hrtime()
3	Internationalization:
	◦	Intl.DateTimeFormat for locale-aware formatting
	◦	Timezone database access
4	Edge Cases:
	◦	Date range limitations (±100,000,000 days from epoch)
	◦	DST transition handling
	◦	Invalid date detection
5	Advanced Calculations:
	◦	ISO week numbers
	◦	Accurate age calculation
	◦	Business day calculations (not shown but important)
6	Performance Patterns:
	◦	Immutability benefits
	◦	Caching strategies
	◦	Parsing performance
7	Common Pitfalls:
	◦	Month 0-indexing
	◦	DST gaps/overlaps
	◦	Timezone mismatches
	◦	Browser parsing inconsistencies
8	Library Recommendations:
	◦	When to use libraries vs native Date
	◦	Modern alternatives to Moment.js
9	Future Temporal API:
	◦	Upcoming improvements to date handling
	◦	Better immutability and timezone support
10	Best Practices:
	◦	Always store and transmit in UTC
	◦	Only convert to local time for display
	◦	Validate all date inputs
	◦	Be explicit about timezone handling

Critical Considerations for Production Code:
1	Timezones are Hard:
	◦	Always store and process dates in UTC
	◦	Only convert to local time for display
	◦	Be aware of DST transitions
2	Parsing is Inconsistent:
	◦	Avoid parsing date strings without explicit format
	◦	Prefer YYYY-MM-DD format (ISO 8601)
	◦	Consider using a library for complex parsing
3	Date Math is Tricky:
	◦	Adding days != adding 24 hours (due to DST)
	◦	Month boundaries need special handling
	◦	Leap years affect February calculations
4	Client vs Server Differences:
	◦	Client dates use browser's timezone
	◦	Server dates typically use UTC
	◦	Sync issues can cause subtle bugs
5	Immutable Patterns:
	◦	Avoid modifying dates directly
	◦	Create new instances for each change
	◦	Prevents accidental shared state
*/


// E-COMMERCE : Order delivery Estimation
/*
 Calculates estimated delivery date considering:
 	- Processing time (2 business days)
	- Shipping time (3-5 business days)
	- Weekends/holidays excluded
 */

function getDeliveryDate(orderDate) {
	const processingDays = 2;
	const minShippingDays = 3, maxShippingDays = 5;

	// Start with processing time
	let deliveryDate = addBusinessDays(orderDate, processingDays);

	// Add random shipping days (3-5)
	const shippingDays = minShippingDays + Math.floor(Math.random() * (maxShippingDays - minShippingDays +1));
	deliveryDate = addBusinessDays(deliveryDate, shippingDays);
	return deliveryDate;
}

function addBusinessDays(startDate, daysToAdd) {
	const result = new Date(startDate);
	let addedDays = 0;
	while(addedDays < daysToAdd){
		result.setDate(result.getDate() +1);
		// skip weekends (0=Sun 6=Sat)
		if(result.getDay() !==0 && result.getDay() !==6){
			addedDays++;
		}
	}
	return result;
}


// Usage 
const orderDate = new Date(2023, 11, 15);  // Dec 15, 2024 (Friday)
console.log("Estimated Delivery: ", getDeliveryDate(orderDate));


// FINANCE: Loan payment calculated
/*
 Generates payment schedule for a loan
 	@param {Date} startDate - First payment date
	@param {number} termMonths - Loan duration in months
	@param {number} principal - Loan amount
	@param {number} annualRate - Annual interest rate (e.g., 5.5)
*/

function generatePaymentSchedule(startDate, termMonths, principal, annualRate) {
	const monthlyRate = annualRate / 100/ 12;
	const payment = principal* 
	(monthlyRate * Math.pow(1+ monthlyRate, termMonths))/ 
	(Math.pow(1+ monthlyRate, termMonths)-1);

	const schedule = [];
	let balance = principal;
	let currentDate = new Date(startDate);

	for(let i=1; i<=termMonths; i++) {
		const interest = balance * monthlyRate;
		const principalPayment = payment - interest;

		schedule.push({
			paymentDate: new Date(currentDate),
			payment: payment.toFixed(2),
			principal: principalPayment.toFixed(2),
			interest: interest.toFixed(2),
			balance: (balance - principalPayment).toFixed(2)
		});

		balance -= principalPayment;
		currentDate.setMonth(currentDate.getMonth() +1); // auto-handles year rollover

	}

	return schedule;
}


// Usage
const schedule = generatePaymentSchedule(
	new Date(2023, 5,1),  // June 1, 2023
	12,			// 1 year term
	10000,			// $10,000 loan
	7.5			// 7.5% interest
);

console.table(schedule.slice(0,12)); // show first 3 payments



// Healthcare: Medication Reminder System

/*
 * Calculates next medication doses based on:
 * 	- First dose time
 * 	- Frequency (hours between doses)
 * 	- Operating hours (8AM - 10PM)
 * */

function getNextDoses(firstDoseTime, frequencyHours, daysToShow) {
	const doses= [];
	const cutoffStart = 8, cutoffEnd = 22; // 8AM - 10PM

	let currentDose = new Date(firstDoseTime);

	while(doses.length < daysToShow * 24 / frequencyHours ){
		const doseHour = currentDose.getHours();

		// Only includes doses during operating hours
		if(doseHour >= cutoffStart && doseHour < cutoffEnd) {
			doses.push(new Date(currentDose));
		}

		// Add frequency hours (handles DST changes)
		currentDose.setTime(currentDose.getTime() + frequencyHours * 3600 * 1000);
	}

	return doses;
}

// Usage
const firstDose = new Date();
firstDose.setHours(9,0,0,0);

const nextDoses = getNextDoses(firstDose, 8,3); // Every 8 hours for 3 days
console.log("Upcoming Doses:");
nextDoses.forEach(dose=>{
	console.log(dose.toLocaleString([],{
		weekday:'short',
		hour: '2-digit',
		minute: '2-digit'
	}));
});



// 4) Analytics: User session Tracking
/*
 * Tracks session duration with:
 * 	- Session start/end timestamps
 * 	- Timezone conversion for reporting
 * 	- Inactivity timeout (30 minutes)
 * */

class SessionTracker {
	constructor() {
		this.sessions = [];
		this.INACTIVITY_TIMEOUT = 30 * 60 * 1000; //30min
	}

	startSession(userId) {
		this.sessions[userId]={
			start: new Date(),
			lastActivity: Date.now()
		};
	}

	updateActivity(userId) {
		if(this.sessions[useId]){
			this.sessions[userId].lastActivity = Date.now();
		}
	}

	endSession(userId) {
		if(!this.sessions[userId]) return null;

		const session = this.sessions[userId];
		const endTime = new Date();
		const duration = endTime - session.start;

		// cleanup
		delete this.sessions[userId];

		return {
			userId,
			start: session.start.toISOString(),
			end: endTime.toISOString(),
			duration: formatDuration(duration),
			timezone: Intl.DateTimeFormat().resolvedOptions().timezone
		};
	}

	checkInactiveSession() {
		const now = Date.now();
		Object.keys(this.sessions).forEach(userId=>{
			if(now - this.sessions[userId].lastActivity > this.INACTIVITY_TIMEOUT){
				this.endSession(userId);
			}
		});
	}

}
function formatDuration(ms) {
		const secs = Math.floor(ms/1000);
		return `${Math.floor(secs/60)}m ${secs%60}s`;
	}


// Usage
const tracker = new SessionTracker();
tracker.startSession('user123');
setTimeout(()=>{
	const report = tracker.endSession('user123');
	console.log('session report:',report);
}, 5000);



// --------------------------
// Travel: Flight Duration Calculator


/*
 * Calculate flight duration across timezones
 * @param {string} departure - ISO string (e.g., "2023-12-25T09:00:00-05:00")
 * @param {string} arrival - ISO String (e.g., "2023-12-25T16:30:00+01:00")
 * */


function calculateFlightDuration(departure, arrival) {
	const depDate = new Date(departure);
	const arrDate = new Date(arrival);

	// handle same-day timezone crossing
	if(arrDate < depDate) {
		arrDate.setDate(arrDate.getDate() +1);
	}

	const durationMs = arrDate - depDate;
	const hours = Math.floor(durationMs / (1000 * 60 * 60));
	const minutes = Math.floor((durationMs % (1000* 60 * 60))/ (1000* 60));


	return {
		totalMinutes: Math.floor(durationMs / (1000 * 60)),
		formatted: `${hours}h ${minutes}m`,
		departureLocal: depDate.toLocaleTimeString(),
		arrivalLocal: arrDate.toLocaleTimeString()
	};
}



// Usage: JFK to LHR
const duration = calculateFlightDuration(
 "2023-12-25T09:00:00-05:00", // NYC 9AM EST
  "2023-12-25T16:30:00+00:00"  // LHR 4:30PM GMT
);

console.log(`Flight Duration: ${duration.formatted}`);
