// ======================
// SYMBOL : Unique , non-string property keys
//
// User for safe meta-properties, library isolation, and hidden fields.

// -----------------
// Create a symbol
const id = Symbol("id");  // descriptoin is optional and for debugging

//-----------------------
// Symbols are always unique , even with the same description
console.log(Symbol("id")=== Symbol("id")); // false


// WRONG: Symbols are not auto-converted to strings

const uid = Symbol("uid");

// alert(uid)  // typeError: Cannot convert a Symbol to string

console.log(uid)  // Symbol(uid)
console.log(uid.toString()); // Symbol(uid)
console.log(uid.description); // "uid"


// --------------------
// USE-case : Hidden or collison-proof object keys

const user = {
	name:"John",
};

// safe to add to external objects without conflict
user[id] = 34;
console.log(user[id]); // 42


// Two libraries using Symbols('id') will not collide
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1==id2);  // false



//------------------------
//Symbol in object literals require computed property syntax->[]

const token = Symbol('token');

const session = {
	userId : 1,
	[token] : "abc123" // key is not "token", but the symbol
}

console.log(session)

//-----------------------
//Iteration behaviour

const meta = Symbol("meta");
const obj = {
	visible:true,
	name:"ADAM",
	[meta]:"internal",
};

// for..in ignores symbols
for(let key in obj) {
	console.log(key); // only visible keys will get consoled
}

// object.keys ignores symbols
console.log(Object.keys(obj))

// -> Access symbol directly
console.log(obj[meta])


// -> Object.assign *copies* symbols too
const copy = Object.assign({},obj);
console.log(copy[meta]);
console.log(copy[meta]===obj[meta])



//----------------------------
// You cant use SYMBOLS on the LHS of dot notation

//obj.meta = ... // WORKS, string key
//obj[meta]= ... // WORKS , symbol key
//obj.meta is not the same as obj[Symbol("meta")]


// ----------------------
// SOME MORE EXAMPLES


// Symbol creation

const sym1 = Symbol();
const sym2 = Symbol("desc");
const sym3 = Symbol("desc");
console.log(sym2 === sym3)  // false

// Using symbol as object key
const key = Symbol("key");
const obj1 = {
	[key]:"secret",
	visible: true,
};
console.log(obj1[key]); // "secret"

// Symbol keys are non-enumerable
for(let k in obj1) console.log(obj1[k]);  // "visible"
console.log(Object.keys(obj1));  // [visible]
console.log(Object.getOwnPropertySymbols(obj1));


// Prevent accidental overwrite 
const libSym = Symbol("id");
obj1[libSym]= 123;
obj1["id"] = "collides";  // no cillision with Symbol("id")

console.log(obj1)


// Method using Symbol key
const toJSON = Symbol("toJSON");
const data = {
	[toJSON]() {
		return "internal";
	}
};
console.log(data[toJSON]()); // "internal"

// Object.assign copies symbols
const clone1 = Object.assign({},obj1);
console.log(clone1[key])


// Symbol.toPrimitive customization
const custom = {
	[Symbol.toPrimitive](hint) {
		return hint === "string" ? "S" : 99;
	}
};
console.log(`${custom}`);
console.log(+custom);

// Symbol.for : global symbol registry
const g1 = Symbol.for("shared");
const g2 = Symbol.for('shared');
console.log(g1 === g2);  // true
console.log(Symbol.keyFor(g1)); // "shared"



// Built-in symbols
const iterable = {
	*[Symbol.iterator]() {
		yield 1;
		yield 2;
	}
};
console.log([...iterable]);  // [1,2]

const matcher = {
	[Symbol.match](str) {
		return str.includes("x") ? ["x"] : null;
	}
};
console.log("abcx".match(matcher));  // ["x"]

const toTag = {
	[Symbol.toStringTag]:"Custom"
};
console.log(Object.prototype.toString.call(toTag)); // "[object Custom]"

// Global Symbols : shared across entire app (via registry)

// Create or fetch the same symbol globally
let id3 = Symbol.for("id"); // if "id" doesn't exist in registry, create it
let id4 = Symbol.for("id"); // fetchs same symbol from registry
console.log(id3===id4)

// Symbol.keyFor() : get the key (string name) of a global symbol

let symA = Symbol.for("token");
console.log(Symbol.keyFor(symA));

let localSym = Symbol("token");
console.log(Symbol.keyFor(localSym)); // undefined (got global)

// ALL SYMBOLS HAVE A DESCRIPTION
console.log(symA.description)
console.log(localSym.description); // "token"

console.log(symA === localSym)

// Use case: consistent symbol key for app-wide metadata access

let metaKey = Symbol.for("app.meta");
let user1 = {};
user1[metaKey] = {role:"admin"}
console.log(user1)

let anotherAccess = Symbol.for("app.meta");
console.log(user1[anotherAccess]);  // {role:"admin"}
				// Because "Symbol.for" defines key globally


// Built-in (well known) symbols - internal behaviours override

// Example : Symbol.toPrimitive controls type conversion
const priceTag = {
	value: 99,
	[Symbol.toPrimitive](hint) {
		return hint === "string" ? "$" + this.value : this.value;
	}
};

console.log(String(priceTag)); //"$99"
console.log(+priceTag);  //99


// Example: Symbol.iterator for making object iterable
const range = {
	from: 1,
	to: 6,
	[Symbol.iterator]() {
		let current = this.from, last = this.to;

		return {
			next() {
				return current <= last
				  ? {done:false,value:current++}
				  : {done:true};
			}
		};
	}
};

console.log([...range]); // [1,2,3]



// Other useful system symbols :
// 1) Symbol.hasInstance  -> customize instanceof
// 2) Symbol.isConcatSpreadable -> control array concat behaviour
// 3) Symbol.toStringTag  -> customize Object.prototype.toString output
// 4) Symbol.match / Symbol.replace / Symbol.search / Symbol.split -> RegExp behaviour override











// 🔹 Summary of Symbol usage in JS

// 1️⃣ Symbol is a primitive for unique identifiers
let syma = Symbol("id");
let symb = Symbol("id");
console.log(syma === symb); // false — always unique

// 2️⃣ Global Symbols: shared access via registry
let globalSym1 = Symbol.for("session");
let globalSym2 = Symbol.for("session");
console.log(globalSym1 === globalSym2); // true

// Reverse lookup of global symbol key
console.log(Symbol.keyFor(globalSym1)); // "session"

// 3️⃣ Hidden Properties — safe from for..in and collision
let hidden = Symbol("secret");
let user3 = { name: "John", [hidden]: "token123" };

for (let key in user3) console.log(key); // only logs "name"
console.log(user3[hidden]); // token123

// 4️⃣ Symbols in object literal — must use square brackets
let uID = Symbol("uid");
let obj2 = {
  [uID]: 42,
  public: true
};

// 5️⃣ System Symbols to override default behaviors

// toPrimitive — custom object-to-primitive conversion
let data1 = {
  val: 7,
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? `#${this.val}` : this.val;
  }
};
console.log(`${data1}`);  // "#7"
console.log(data1 + 1);   // 8

// iterator — make custom object iterable
let counter = {
  start: 1,
  end: 2,
  [Symbol.iterator]() {
    let i = this.start;
    return {
      next: () => i <= this.end
        ? { value: i++, done: false }
        : { done: true }
    };
  }
};
console.log([...counter]); // [1, 2]

// 6️⃣ Symbols aren't fully private — can be accessed via:
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(secret)]
console.log(Reflect.ownKeys(user)); // ['name', Symbol(secret)]

// ✅ Use cases summary:
// • Unique hidden keys (e.g., metadata, internal IDs)
// • Overriding default behaviors (Symbol.iterator, Symbol.toPrimitive, etc.)
// • Avoid property name collisions in shared objects or 3rd-party libs







