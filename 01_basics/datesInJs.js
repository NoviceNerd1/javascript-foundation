// // DATES

// // let myDate= new Date()
// // console.log(myDate)
// // console.log(myDate.toString())
// // console.log(myDate.toString('en-IN'))
// // console.log(myDate.toDateString())
// // console.log(myDate.toTimeString())
// // console.log(myDate.toLocaleTimeString())
// // console.log(myDate.toUTCString())
// // console.log(myDate.getTimezoneOffset())
// // console.log(myDate.toLocaleString())

// // let myCreateDate= new Date(2023, 1, 30)
// // let myCreateDate1= new Date(2023, 1, 30,5,34)
// // console.log(myCreateDate1)
// // console.log(myCreateDate1.toString())

// // let mycreatedDate= new Date("2025-02-23")
// // console.log(mycreatedDate)
// // console.log(mycreatedDate.toString())

// let mycreatedDate1 = new Date("10-04-2025");
// // console.log(mycreatedDate1)
// // console.log(mycreatedDate1.toLocaleString())
// // console.log(mycreatedDate1.toString())

// // let myTimeStamp = new Date()
// // console.log(Date.now())
// // console.log(Math.floor((Date.now()/1000)))
// // console.log(myTimeStamp.toISOString())
// // console.log(myTimeStamp.toLocaleString())

// // let currTime= new Date()
// // currTime.toISOString()
// // currTime.toLocaleString()
// // console.log(`Task started , current time: ${currTime}`)

// //console.log("------------------------")
// function trackExecTime() {
//   const start = new Date();
//   console.log(`Task started at: ${start.toLocaleString()}`);

//   setTimeout(() => {
//     const end = new Date();
//     const elaspedSec = Math.floor((end.getTime() - start.getTime()) / 1000);

//     console.log(`Task ended at: ${end.toLocaleString()}`);
//     console.log(`Time elasped: ${elaspedSec} seconds`);
//   }, 3000); // 3 second === 3000 milisecond
// }

// //trackExecTime()

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   async function trackExecutionTimeAsync() {
//     const start = new Date();
//     console.log(`Task started at: ${start.toLocaleString()}`);

//     await sleep(3000); // 3 sec delay

//     const end = new Date();
//     const elapsedSeconds = Math.floor((end.getTime() - start.getTime()) / 1000);

//     console.log(`Task ended at:   ${end.toLocaleString()}`);
//     console.log(`Time elapsed:    ${elapsedSeconds} seconds`);
//   }

//   trackExecutionTimeAsync();

//   const start= new Date()
// console.log(start.toLocaleString())
const newDate = new Date();

console.log(newDate.toLocaleString('default', {
  dateStyle: "full",
  timeStyle: "full",
}));

const options = {
    dateStyle: "full",
    timeStyle: "full"
  };
  
  try {
    console.log(new Date().toLocaleString('default', options));
  } catch (err) {
    console.error("❌ Your environment doesn't support dateStyle/timeStyle");
  }


  const d = new Date();

console.log(`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);