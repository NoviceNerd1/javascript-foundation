const marvel_heros= ["thor","Ironman", "Spiderman"]
const dc_heros = ["superman", "flash","batman"]

//marvel_heros.push(dc_heros); -> adds dc_heros array as singel element
//console.log(marvel_heros);   -> also push mutates the array

//const arr= marvel_heros.concat(dc_heros)  // returns a new array
//console.log(arr)

const all_new_heros = [...marvel_heros, ...dc_heros] // '...' spreads the element and make then individual, and then they get converted into arr using '[]' 
//console.log(all_new_heros);

const another_arr = [1,2,3,4,[5,6,7],8,[9,10,[11,12]]]

const simple_arr = another_arr.flat(3);

//console.log(simple_arr);


//console.log(Array.isArray(another_arr)); // nested array is arr ofc
//console.log(Array.isArray(simple_arr));

//console.log(Array.isArray("RISHI_SINGH"));  // is a string not arr
//console.log(Array.isArray(Array.from("RISHI_SINGH"))); // Array.from returns array, and then its TRUE


//console.log(Array.from({name:"histesh"})) // INTERSTING -> returns empty array -> Array.from needs to know from which it will make array, key or value

let score1=100
let score2=200
let score3=300

//console.log(Array.from({score1,score2,score3})); -> from(s1,s2) gives error (from is not function something), Array.from({s1,s2}) gives [] ie. empty arry

console.log(Array.of(score1,score2,score3)); 
