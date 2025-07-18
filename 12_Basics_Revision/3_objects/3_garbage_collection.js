// JS Garbage Collection

// ==========================
// 🧼 Garbage Collection Summary
// ==========================

/*
📌 Key Concepts:

1. 🧠 Garbage Collection is automatic.
   - No manual control via code (no free(), delete, etc.).
   - Handled behind the scenes by the JS engine (e.g., V8).

2. ♻️ Reachability determines memory retention.
   - Objects are kept in memory if *reachable* from a root:
     - Global variables
     - Current call stack (local variables, parameters)
     - Closures in active scopes

3. 🔗 Reference ≠ Reachability
   - Even if objects refer to each other (cyclic),
     they can be garbage-collected if not reachable from any root.
   - Entire "islands" of interlinked objects can be collected.

4. ⚙️ Under the Hood
   - JS engines use advanced GC algorithms like:
     - Mark-and-Sweep
     - Generational GC
     - Incremental + Idle-time GC

5. 📚 For Low-Level Deep Dives:
   - Book: "The Garbage Collection Handbook"
   - Article: *A Tour of V8: Garbage Collection*
   - V8 blog + Vyacheslav Egorov's blog for GC internals

6. 🚀 When to Learn More:
   - Low-level engine internals are useful
     for memory-critical apps, performance tuning,
     or contributing to engine-level OSS.
   - Recommended **after mastering core JavaScript**.

*/

let user = {
  name: "John"
};

user = null; // Now the object is unreachable and GC will clean it up.

// JS has automatic memory management.
// You don't manually free memory - the engine does it via Garbage Collection (GC).

// CORE PRINCIPLE: "Reacability"
// Only "reachable" values are retained in memory.

// Reachable = accessible from roots like:
// -> Local variables in the current function call
// -> Variables in the call stack (active funcitons)
// -> Global Variables
// -> Any object referneced from the above


// Example: Global refernce keeps the object alive

 user = {
 name:"Alive"
};  // "user" is a root -> object stays in memory
console.log(user);

// if we remove the reference :
user = null;  // now the object becomes unreachable (if no other reference exists)
console.log(user);

// GC will remove the object when its safe (not immediately)



// Example of Reacability Chain

let user2 = {
  profile:{

	  username : "bob",
	  preferences:{
		theme:"dark",
	  }
  }
};

console.log(user2.profile.preferences)

// "user2" is a root -> it keeps profile object alive
// "profile" keeps "preferences" alive
// so, all are reachable

user2 = null;  // whole chain becomes unreachable

//console.log(user2.profile) // Error : Cannot read profile of null



// Cycles don't break GC

let a = {};
let b = {};

//create a circular reference
a.b = b;
b.a = a;

console.log(a,"\n",b)
console.log(a.b,"\n",b.a)

// If both 'a' and 'b' become unreachable (no roots reference them), GC can still collect them

a = null;
b = null;

// Now GC detects the cycle and cleans up both

//--------------------
// Recap
//--------------
// 1) memory is automatically managed
// 2) Garbage collector tracks object "reachability" from root values.
// 3) Objects with no path from any roots are considered garbage and removed.
// 4) Cyclic references don't block GC - moden engine handles them
// TO HELP GC: break references (e.g. set large unused objects to null) when no longed needed.
// -----------------------


// Simple Example

// CASE 1 : one reference -> then removed

 user = {
	name:"Uron"
};
// user --> {name:"Uron"}
// 'user' holds a reference. Object is reachable.


user = null;
// No more references to the object
// GC reclaims the memory - object is cleaned up



// CASE 2 : MULTIPLE REFERENCES

 user2 = {
	name: "Ean",
};

let admin = user2;  // Both point to same object

user2 = null;
// Not deleted, Still reachable via 'admin'

admin = null;
// Now no references remain -> GC can remove it



// CASE 3: Interlinked Objects

function marry(man,woman){
	woman.husband = man; // ->link : woman -> man
	man.wife = woman;  // link : man -> woman

	return {
		father : man,
		mother : woman,
	};
}

let family = marry(
	{name : "James"},  // man object
	{name : "Anne"},  // woman object
);

/*
 Memory graph looks like:
 family --> {
	father --> {name:"James", wife --> woman }
	mother --> {name:"Anne", husband --> man }
 }
 So:
 -> family keeps father and mother reachable
 -> father and mother reference each other

 Everything is reachable.
  */

// Now break references:
delete family.father;  // removes reference to James
delete family.mother.husband;  // removes back-reference from Anne to James

// Now James has *no incoming references* -> unreachable

// GC will remove James' object
// Remaining:
// family.mother (Anne) is still accessible
// Anne has no .husband anymore



// Unreachable Island && Mark-and-Sweep GC

// Step 1 : create interconnected objects "island"

// we have already created interconnected object "family", and function "marry"

// We have previouse seen a memory map, but here's another 

/*
Memory map (simplified):

root → family → father → John
                     ↘︎ wife ↘︎
              mother ← Ann ← husband
Every object reachable via root (family)
*/


// Step 2: break the root link

family = null;

/*
	Now the entire "island" (John <--> Anne <--> wrapper object) becomes unreachable.

	Despite internal references (John.wife -> Anne, Ann.Husband->John),
	there's no *external root* pointing to any of them.

	Result:
	- GC detects they're unreachable.
	- Whole structure is removed from memory.
*/


// How to "Mark-and-Sweep" Garbage Collecter Works

/*
  1 - Start from roots:
       - Global variables
       - local variables in active functions
       - current executrion context
  
  2 - "Mark" all directly references objects.

  3 - Follow their references recursively and mark them too.

  4 - After marking, sweep:
  	- Remove all unmarked (unreachable) objects.

  ANALOGY : A bucket of paint is spilled from the roots.
  	    Anything not touhced by paint is unreachable -> collected.

*/

// Optimizations used in Modern JS Engines

// Generational GC:
//   - Track 'new' objects more aggresively (short lifespan).
//   - 'Old' objects (survive longer) are checked less frequently

// Incremental GC:
//   - Break down GC into smaller steps.
//   - Avoid long blocking pauses in code execution.

// Idle-time GC:
//   - Run GC when CPU is idle (eg. during event loop lulls).
//   - Minimizes user-perceived delays

// Other Techniques:
//   - Compating memory
//   - write barriers
//   - reference counting (in hybrid engines)

// Bottom Line:
//   - GC is fully automatic.
//   - Devs can influence it *indirectly* via data structure design , object lifetimes, etc.
//   - Understanding GC helps in avoiding memory leaks(eg. event listeners, closures).


































