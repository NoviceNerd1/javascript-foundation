// let score = "22asc"; // 22 easily converts to number
// // 22asc gives NaN when converted to number

// console.log(typeof score);
// console.log(typeof score);

// let valInNum = Number(score);

// console.log(typeof valInNum);
// console.log(valInNum); // is NaN - Not a Number
// //console.log(typeof(valInNum))

// let val1 = Number(null);
// console.log(val1); // null becomes 0 in number
// console.log(typeof val1); // null object becomes number

// let val2 = Number(undefined);
// console.log(val2);
// console.log(typeof val2);

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // 1, "xyz" gives true, 0, "" gives false
// console.log(typeof booleanIsLoggedIn);

// let someNum = 33;
// let stringNum = String(someNum);
// console.log(stringNum);
// console.log(typeof stringNum);

// // !!!!!!!!!!!!!!!!!!!! OPERATIONS  !!!!!!!!!!!!!!!!!!!!!!!!

// let val = 3;
// let negVal = -val;
// console.log(negVal);
// console.log(typeof negVal);

// // String Operation

// let str1 = "Rishi ";
// let str2 = "Singh";
// let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true);
// console.log(+"");

// let num1, num2, num3;

// let gameCounter = 200;
// console.log(++gameCounter)
// //++gameCounter;
// console.log(gameCounter++)
// //gameCounter++;
// console.log(gameCounter)

// console.log(2>1)
// console.log(2>=1)        avg comparisions
// console.log(2>1)

// console.log("2">1)
// console.log("02">1)

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// ====== Strict comparisions =========

//console.log("2" === 2);

let userOne = {
  email: "user@abc.com",
  upi: "abc@abc",
};

console.log(userOne.email);
console.log(userOne.upi);

let userTwo = userOne;

userTwo.email = "abc@abc.com";

console.log(userOne.email);
console.log(userTwo.email);

let myYoutubeName= "Rishi";

let anotherName= myYoutubeName;
console.log(anotherName)

anotherName= "Rishabh bhaiiiiiii!!!!!!!"

console.log(myYoutubeName)
console.log(anotherName)