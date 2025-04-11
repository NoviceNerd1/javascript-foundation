const name = "Rishi";
const newName = new String("Rishi");
console.log(newName);
const repoCount = 50;

//console.log(name+ repoCount+ " Value ");      Not used much now

console.log(
  `Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}.`
);

const gameName = new String("Hello I am Rishi");

console.log(gameName[0]);

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("R"));
console.log(`Substring: ${gameName.substring(0, 4)}`);

const newString = gameName.substring(0, 11);
console.log(newString);

const anotherString = gameName.slice(-9, 11);
console.log(anotherString);

console.log("ris");

const a = "     adefe   asvas      ";
console.log(a);
console.log(a.trim());
console.log(a.replaceAll(" ", "-"));
console.log(gameName.includes("eeeeeqqrrr"));
console.log(a.split("   "));

const bc = "Rishi";
const cd = "Singh";
console.log(bc.concat(" ", cd));
console.log(bc);
console.log(cd);

let str = "Abcdef";
console.log(str.fixed());

str = "Red Text";
console.log(str.fontcolor("red"));

str = "Big";
console.log(str.fontsize(2));

str = "banana"; 
console.log(str.indexOf("n"));

str= "Hello"
console.log(str.isWellFormed());

str= "I am Rishi Singh";
console.log(str.lastIndexOf("Singh"));

