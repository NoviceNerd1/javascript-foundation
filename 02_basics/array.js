// // // Arrays

// // console.log(myArr[1])

// // // Showed 'undefined' when i did myArr[12], not complete error

// // const myHeros=[ "Superman", "spiderman", "Shaktiman"]
// // console.log(myHeros)
// // const myArr2= new Array(1,2,3,4,5,6)
// // console.log(myArr2)

// // // array methods

// // // myArr.push(7);
// // // myArr.pop();
// // // console.log(myArr)

// // //myArr.unshift(9)      // appends value at the start

// // // UNSHIFT -> not good because, it appends element at the start of array, we will have to sort it

// // // myArr.shift()       // removes the first element
// // // console.log(myArr)

// // // console.log(myArr.includes(4))
// // // console.log(myArr.indexOf(4))
// // // console.log(myArr.indexOf(19))

// // const newArr = myArr.join()

// // console.log(myArr)
// // console.log(typeof myArr)
// // console.log(newArr)
// // console.log(typeof newArr)
// const myArr= [0,1,2,3,4,5]
// console.log(myArr)

// console.log("A", myArr)

// const myn1= myArr.slice(1,4)

// console.log(myn1)
// console.log("B", myArr)

// // slice doesnt change main array, just copies the element

// const myn2= myArr.splice(1,4)
// console.log("C", myArr)
// console.log(myn2)

// // SPLICE -> doesnt copy the elements from the given range but it extracts the elemtns from the main array

// // array - object with numeric keys + a length property

// const a= []
// const b= new Array()
// a[100]= "boom"
// b[100]="boom"
// console.log(a.length)
// console.log(b.length)

// console.log(marvel_heros);
// console.log(dc_heros);

// //marvel_heros.push(dc_heros);
// //console.log(marvel_heros);

// let all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// let all_heros = [...dc_heros, ...marvel_heros];
// console.log(all_heros);

// console.log(another_arr);
// let another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// let final_arr = another_arr.flat(Infinity);
// console.log(final_arr);

// console.log(Array.isArray("Rishi"));
// console.log(Array.from("Rishi"));
// console.log(Array.from({ name: "Rishi" }));
// console.log(Array.isArray(another_arr));
// console.log(Array.isArray(final_arr));

let marvel_heros = ["thor", "Hulk", "Spiderman"];
let dc_heros = ["superman", "flash", "Batman"];

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// for (let i = 0; i < 3; i++) {
//   ((j) => setTimeout(() => console.log(j), 1000))(i);
// }

// function makeCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counterA = makeCounter();
// counterA(); // ?
// counterA(); // ?

// const counterB = makeCounter();
// counterB(); // ?

// console.log(Array.from("Rishi"));
// console.log(Array.from({ length: 3, 0: "a", 1: "b", 2: "c" }));

// const nums = [1, 2, 3];
// const doubled = nums.map((x) => x * 3);
// console.log(nums);
// console.log(doubled);

// const even = nums1.filter((x) => x % 2 === 0);
// console.log(even);

// const sum = nums1.reduce((acc, x) => acc + x, 0);
// console.log(sum);

// const arr = new Array(3).fill(0);
// console.log(arr);

// const arr1 = ["a", "b", "c"];
// const keys = [...arr1.keys()];
// const keys = [...arr1.values()];

//const nums1 = [1, 2, 3, 4, 5, 6];
//const sliced = nums1.slice(1, 4);
//console.log(sliced);

//console.log(nums1);
//nums1.splice(2, 2, "a", "b");
//console.log(nums1);

//console.log(nums1.some((x) => x > 2));
//console.log(nums1.every((x) => x > 0));

