const coding = ["js", "ruby","java","cpp","python"]

const val = coding.forEach((item)=>{
//console.log(item);
//return item;
})

//console.log(val)

// THEREFORE, " forEach " doesnt return a val
//
// 
//	FILTER
//

const myNums= [1,2,3,4,5,6,7,8,,9,10]
const arr= myNums.filter((num)=>{
	return num>4;
})

//console.log(arr)

const newNums=[]

myNums.forEach((val)=>{
if(val<6){
newNums.push(val)
}
})

//console.log(newNums)

const books = [
  { title: "Clean Code", genre: "Programming", publish: 2008, edition: 2013 },
  { title: "The Pragmatic Programmer", genre: "Programming", publish: 1999, edition: 2019 },
  { title: "Deep Work", genre: "Productivity", publish: 2016, edition: 2020 },
  { title: "Atomic Habits", genre: "Self-help", publish: 2018, edition: 2021 },
  { title: "The Lean Startup", genre: "Business", publish: 2011, edition: 2016 },
  { title: "Sapiens", genre: "History", publish: 2011, edition: 2015 },
  { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: 2006 },
  { title: "Introduction to Algorithms", genre: "Education", publish: 1990, edition: 2009 },
  { title: "Cracking the Coding Interview", genre: "Career", publish: 2008, edition: 2015 },
  { title: "You Don't Know JS", genre: "Programming", publish: 2014, edition: 2020 },
];


books.forEach(val=>{
//console.log(val)	
//console.log(`${val.title} - ${val.genre}`);
})

for(let i=0;i<books.length; i++){
//console.log(`${books[i].title} - ${books[i].genre}`)
}

for(let book of books){
//console.log(book.title)
}

for(let index in books){
//console.log(books[index].genre);
}

const newBooks= books.filter((book)=> book.genre==="{Programming" || book.publish <= 1999)

//console.log(newBooks)


// filter + forEach

let newBook1 = books
	.filter((book)=> book.publish>=2010)
	.forEach((book)=> console.log(`Recent: ${book.title} (${book.publish})`))



console.log(newBook1)













