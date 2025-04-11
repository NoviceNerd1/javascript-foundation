// // Arrays


// console.log(myArr[1]) 

// // Showed 'undefined' when i did myArr[12], not complete error

// const myHeros=[ "Superman", "spiderman", "Shaktiman"]
// console.log(myHeros)
// const myArr2= new Array(1,2,3,4,5,6)
// console.log(myArr2)

// // array methods

// // myArr.push(7);
// // myArr.pop();
// // console.log(myArr)

// //myArr.unshift(9)      // appends value at the start

// // UNSHIFT -> not good because, it appends element at the start of array, we will have to sort it

// // myArr.shift()       // removes the first element
// // console.log(myArr)

// // console.log(myArr.includes(4))
// // console.log(myArr.indexOf(4))
// // console.log(myArr.indexOf(19))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof myArr)
// console.log(newArr)
// console.log(typeof newArr)
const myArr= [0,1,2,3,4,5]
console.log(myArr)

console.log("A", myArr)

const myn1= myArr.slice(1,4)

console.log(myn1)
console.log("B", myArr)

// slice doesnt change main array, just copies the element

const myn2= myArr.splice(1,4)
console.log("C", myArr)
console.log(myn2)

// SPLICE -> doesnt copy the elements from the given range but it extracts the elemtns from the main array

