// ------------------------- COMPARISIONS ----------------------
//

// Comparison operators:
// < , >
// >= , <=
// ==
// !=


// Boolean results: true / false

console.log(2>1)
console.log(2==1)
console.log(213!=22)


// comparison results can be assigned to a variable
let results = 5>3;
console.log(results)



// --------------------- STRING COMPARISION --------------------
//

// To see whether a string is greater than another, JS uses, "dictionary" or "lexicographical" order.
// ie., compared letter-by-letter
// 

console.log("STRING COMPARISONS")

console.log('Z'>'A')
console.log('glow'>'glee')
console.log('Bee'>'Be')


// not a real dictionary, but UNICODE ORDER
// 'a' > 'A' -> because lowercase charachters have greater index in  class



// ------------------- Comparison of different types ------------
//

// while comparing different types, JS converts values to numbers

console.log('2'>1);
console.log('02'==2)
//console.log('a'==1)

// true = 1 | false = 0

console.log(true==1)
console.log(false==0)


// A funny consequence
// Its possible that at the same time:
// 1) two values are equal
// 2) one of them is true as boolean and other one is false as boolean


console.log("The funny Consequence");
let a = 0;
console.log(Boolean(a))

let b= "0"
console.log(Boolean(b))

console.log(a==b)	// when converted to number, both are 0, EQUAL




// ---------------------- STRICT EQUALITY ----------------------
//

console.log("Strict Equality")

// regular equality check : ==
// cannot differentiate 0 from false:
console.log(0==false)
console.log(""==false)
// REASON: Converted to numbers , then compared

// Strict equality check : ===
console.log("0"===false)
console.log(0===false)
console.log(""==false)


// regular non-equality: !=
// Strict non-equality : !==



// ------------------ Comparision with null & undefined ---------
//


// there's non-intuitive behavious when null or undefined are compared to other values;
//
// For Strict equality check
 console.log(null===undefined)

// for non-strict equality check
console.log(null==undefined) 
// null -> 0 , undefined -> NaN. 0==NaN => true?? INTERESTING


// Strange result: null vs 0

console.log(null>0)
console.log(null==0)
console.log(null>=0)



// -------------------- INCOMPARABLE UNDEFINED -----------------
//

// undefined shouldn't be compared

console.log("Undefined")
console.log(undefined>0)	// reason 1: undefined converts to NaN(special numeric val) which returns false
console.log(undefined<0)	// reason 1
console.log(undefined==0) 	// reason 2: false because undefined equals null, undefined, and no other value



// -------------------- How to avoid these prob---------------------------------
//

// 1) treat any comparisioin with undefined/null except the strict equality === with exceptional care
// 2) dont use comparision >= > < <= with a variable which may be null/undfefined



// ----------------------- ASSIGNEMNT -----------------------------------
//
console.log("ASSIGNEMNTS")
console.log(5>4)
console.log("apple">"pineapple")
console.log("2">"12")
console.log(undefined==null)
console.log(undefined===null)
console.log(null == "\n0\n")
console.log(null === +"\n0\n")

















