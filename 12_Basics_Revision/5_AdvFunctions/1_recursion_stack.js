/*
 * RECURSION AND STACK
 *
 * Recursion is a programming pattern where a funciton calls 
 * itself to solve a problem by breaking it down into smaller 
 * subproblems of the same type.
 * 
 * */

// EX: Calculating x^n 

// iterative approach
function pow(x,n){
	let result =1;

	for(let i=0;i<n;i++){
		result *= x;
	}

	return result;
}

function recPow(x,n, result=1){
	if(n==0){
		return result;
	}
	return recPow(x,n-1, result*x);
}

// OR

function recPow2(x,n) {
	if(n==1){
		return x;
	} else{
		return x * recPow2(x,n-1);
	}
}


// ternary opeartor operation (more concise)
function pow2(x,n) {
	return (n==1)? x : (x* pow(x,n-1));
}


console.log(pow(2,3));
console.log(pow2(2,3));
console.log(recPow(2,3));
console.log(recPow2(2,3));

/**
 * How recursion works for pow(2, 3):
 * 1. pow(2, 3) = 2 * pow(2, 2)
 * 2. pow(2, 2) = 2 * pow(2, 1)
 * 3. pow(2, 1) = 2 (base case reached)
 * Then the calls unwind:
 * 2 * 2 = 4, then 2 * 4 = 8
 */



// ====================================
// Execution Context and call stack


/*
 * When a function calls itself:
 * 1. Current function execution pauses
 * 2. Its context (variables,position in code) is saved in the 
 * 	execution stack.
 * 3. New context is created for the nested call
 * 4. When nested call finishes, previous context is restored from
 *   stack
 *
 *
 * For pow(2,3) the stack would be:
 *
 * Context 3: {x:2, n:1} (top, currently executing)
 * Context 2: {x:2, n:2}
 * context 1: {x:2, n:3} (bottom, first call)
 *
 * Maximum recursion depth is limited by Javascript engine (typically ~10000)
 * */ 


// ====== Recursive Traversals =======

/*
 * Recusion shines when dealing with nested data structures
 * Example: Calculate total salaries in a company with nested departments
 * */ 

let company = {
	sales: [{name:'John', salary:1000}, {name:'Alice',salary:1600}],
	development:{
		sites: [{name:'Peter', salary: 2000},{name:'Alex', salary:1800}],
		internals:[{name:'Jack', salary:1300}]
	}
};

function sumSalaries(department){
	// Case 1 - base case- if department is an array of people
	if(Array.isArray(department)){
		return department.reduce((sum,person)=>sum+person.salary,0);
	}

	// case 2 - Recursive case - department has subdepartments
	else{
		let sum=0;
		for(let subdep of Object.values(department)){
			sum+= sumSalaries(subdep); // recursively sum subdepartment salaries
		}
		return sum;
	}
}


console.log(sumSalaries(company));


/*
 * Recursive structure traversal:
 * - For arrays (leaf nodes): sum directly
 * - For objects (branches): sum results of recursive calls
 * */


// ====== Recursive data structures

/*
 * Linked List - a recursive data structure where each element:
 * 	- has a value
 * 	- References the next element (or null for end)
 * */

// Linked list example

let list = {
	value:1,
	next: {
		value: 2,
		next:{
			value: 3,
			next: {
				value:4,
				next:null
			}
		}
	}
};


console.log(list);


/*
 * Advantages over arrays:
 * - Faster insertion/deletion (no renumbering needed)
 * - Easy to split/merge lists
 * 
 * Disadvantages:
 * - No direct access to elements by index
 * - Requires more memory for references
 * */



// ====== Summary ===========

/*
 * Key Points:
 *  1. Recursion is when a function calls itself
 *  2. Recursion solution has:
 *  	- base case (simple solution)
 *  	- recursive case (breaks problem into smaller subproblems)
 *  3. Execution context stack manages nested calls
 *  4. Recursion depth stack manages nested calls
 *  5. Recursion solution are oftem cleaner but may use more memory
 *  6. Any recursion can be rewritten as iteration (loop)
 *  7. Recursive data structures (like trees, linked list) are common
 *
 *
 * When to use:
 *  - When problem can be divided into similar subproblems
 *  - When working with nested data structures
 *  - When cleaner code is more important than micro-optimization
 *
 *
 *
 *  This summary covers:

Basic recursion concept with pow() example

Execution context and call stack behavior

Recursive traversals with company departments example

Recursive data structures (linked lists)

Comparison with iterative approaches

Advantages/disadvantages of recursion

Practical use cases and considerations
 * */




// 1) File system navigation (Directory tree traversal)

const fs = require('fs');
const path = require('path');

function scanDirectory(dir, indent=0){
	// Read all files/folders in current directory
	const items = fs.readdirSync(dir);

	items.forEach(item =>{
		const fullPath = path.join(dir,item);
		const stats = fs.statSync(fullPath);

		// print with indentation based on depth
		
	   console.log(' '.repeat(indent * 2) + (stats.isDirectory() ? '📁 ' : '📄 ') + item);

		// Recursive case: if directory, scan its contents
		if(stats.isDirectory()){
			scanDirectory(fullPath, indent +1); // Increase indentation for nested items
		}
	});
}


// Usage:
scanDirectory(process.cwd());

/**
 * Real-world Use Case:
 * - Shows folder structure like tree command
 * - Base Case: Regular file (no recursion)
 * - Recursive Case: Directory (scan its contents)
 * - Indentation visually represents depth
 */




// 2) Comment Threads (Nested Replies)

// simulated database of comments
const comments = {
	id:1,
	text:"what's your favorite framework?",
	replies:[
		{
		id: 2,
		text: "React is great!",
		replies: [
			{
				id:4,
				text:"I prefer Vue actually",
				replies:[] // empty array terminates recursion
			}
		]
		},
		{
			id:3,
			text:"svelte is underrated",
			replies:[]

		}
	]
};

function renderComments(comment, depth = 0){
	// Print comment with left padding based on depth
	console.log(' '.repeat(depth*4) + `-> ${comment.text}`);

	// recursively render replies
	comment.replies.forEach(reply=>
		renderComments(reply, depth+1)
	);
}

//Usage:
renderComments(comments);

/*
 * Real-world Use Case:
 * - Social media comment threads
 * - Base Case: Comment with no replies (empty array)
 * - Recursive Case: Comment with replies
 * - Visual indentation shows reply hierarchy
 * */




// 3) E-commerce Category Tree

const categories = {
	name:"Electronics",
	subcategories:[
		{
			name:"Phones",
			subcategories:[
				{name:"Smartphones", subcategories:[]},
				{name:"Accessories", subcategories:[]}
			]
		},
		{
			name:"Computers",
			subcategories: [
				{name:"Laptops", subcategories:[]},
				{name:"Components", subcategories:[
					{name:"CPUs", subcategories:[] }
				]}
			]
		}
	]
};



function buildBreadcrumbs(category, path=[]){
	// Add current category to path
	const newPath = [...path, category.name];

	// Base case: No subcategories - print full path
	if(category.subcategories.length === 0){
		console.log(newPath.join(' > '));
		return;
	}

	// Recursive case: Process each subcategory
	category.subcategories.forEach(sub=>
		buildBreadcrumbs(sub,newPath)
	);
}

// Usage:
buildBreadcrumbs(categories);

/**
 * Output:
 * Electronics > Phones > Smartphones
 * Electronics > Phones > Accessories
 * Electronics > Computers > Laptops
 * Electronics > Computers > Components > CPUs
 * 
 * Real-world Use Case:
 * - Generate navigation paths for all category endpoints
 * - Shows all possible paths from root to leaf categories
 */


// Permission System (Role Hierarchi)

const roles = {
	name:'CEO',
	permissions:['all'],
	subordinates: [
		{
			name:'Manager',
			permission:['users','products'],
			subordinates: [
				{
				name: 'Team Lead',
				permissions: ['products'],
				subordinates:[]
				}
			]
		},
		{
			name:'CTO',
			permission: ['tech','infra'],
			subordinates:[]
		}

	]
};


function checkPermission(role, permission) {
	// base case 1: Role has the permission
	if(role.permissions.includes('all') || role.permissions.includes(permission)){
			return true;
		}
	
	
	// base case 2: No more superiors to check
	if(!role.subordinates || role.subordinates.length === 0){
		return false;
	}
	
	// Recursive case: Check all superior roles
	return role.subordinates.some(sub=>
		checkPermission(sub,permission)
	);
}


// Usage
console.log(checkPermission(roles,'infra'));
console.log(checkPermission(roles,'users'));
console.log(checkPermission(roles,'products'));


/**
 * Real-world Use Case:
 * - Hierarchical permission checking
 * - Users inherit permissions from parent roles
 * - Demonstrates recursive searching through tree
 */



// 5) DOM Tree Traversal (Browser Environment)

/*
 function countDOMElements(element = document.body){
	let count = 1; // counts current element

	// Base case: Element has no children
	if(!element.children || element.children.length ===0){
		return count;
	}
	

	// Recursive case: count children and their descendants
	for(let child of element.children){
		console.log(element.className);
		count += countDOMElements(child);
	}

	return count;
}


// Usage:
console.log(`This page has ${countDOMElements()} elements`);


---------------------------------
 * Real-world Use Case:
 * - Analyzing page complexity
 * - Base Case: Element with no children
 * - Recursive Case: Element with children
 * - Shows recursion in browser environment
 */


// 6) Nested Menu System (React Component)
/*
function NestedMenu({items}){
	return (
		<ul>
			{items.map(item)=>(
				<li key={item.id}>
				{item.name}
				{ Recursive case: Render child items if they exist }
				{item.children && item.children.length > 0 && (
					<NestedMenu items={item.children}/>
				)}
				</li>
			)}
		</ul>
	);
}


// Usage

const menuItems = [
	{
		id:1,
		name:'Products',
		children: [
			{id:2, name:'Electronics'},
			{id:2, name:'Furniture', children:[
				{id:4, name:'Chairs'}
			]},

		]
	}
];


// <NestedMenu items={menuItems} />


 * Real-world Use Case:
 * - Rendering infinitely nested navigation menus
 * - Common in CMS/admin interfaces
 * - Base Case: Menu item with no children
 * - Recursive Case: Menu item with children

Key Patterns in These Examples:
	1	Tree Structures (files, comments, categories) - The most common recursion use case
	2	Divide and Conquer - Breaking problems into smaller similar problems
	3	Accumulating Results - Building up results through the call stack
	4	Depth Tracking - Using indentation or depth parameters to visualize hierarchy
	5	Base Cases - Empty arrays, leaf nodes, or defined termination conditions


*/


// 1) Tail call optimization (TCO) - theoretical in JS

// Regular recursive factorial

function factorial(n) {
	if(n<=1) return 1;
	return n* factorial(n-1); // needs stack frame
}

// tail-recursion version (theoretically optimized)

function factorialTail(n,acc=1){
	if(n<=1) return acc;

	return factorialTail(n-1, n*acc); // no pending operations
}

/*
 *  Key Points:
 * - ES6 spec includes TCO but it's only implemented in Safari
 * - Tail calls reuse stack frames instead of creating new ones
 * - Most JS engines don't implement it (except Safari)
 * - Pattern still good to know for other languages
 * */



// Trampolining - workaround for stack limits

function trampoline(fn) {
	return (...args)=>{
		let result = fn(...args);
		while(typeof result === 'function'){
			result = result();
		}
		return result;
	};
}

// Non-tail recursive function made stack-safe
const factorialTrampolined = trampoline(function myself(n,acc=1){
	return n<=1 ? acc : ()=> myself(n-1, n*1);
});

console.log(factorialTrampolined(10000)); // no stack overflow


/*
 * When to Use:
 * - When dealing with very deep recursion
 * - Converts recursive calls to iterative loop
 * - Works around JS engine stack limits
 * */




// 3) Memoization - Optimizing recursion

const memo = new Map();

function fibonacci(n){
	if(n<=1) return n;

	// check cache before computing
	if(memo.has(n)) return memo.get(n);

	const result = fibonacci(n-1) + fibonacci(n-2);
	memo.set(n, result); // cache result
	return result;
}

console.log(fibonacci(1000));


/**
 * Benefits:
 * - Reduces O(2^n) time complexity to O(n)
 * - Essential for optimizing overlapping subproblems
 * - Common in dynamic programming
 */



// 4) Mutual Recursion - Two funcitions calling each other 
function isEven(n) {
	if(n===0) return true;
	return isOdd(Math.abs(n) -1);
}

function isOdd(n){
	if(n===0) return false;
	return isEven(Math.abs(n)-1);
}

console.log(isEven(7));
/**
 * Use Cases:
 * - Parsers with alternating syntax rules
 * - State machines
 * - Can be converted to single function with flag
 */



// 5) Recursion with Asynchronous code
async function fetchNestedComments(commentId, depth=0) {
	const comment= await fetch(`/comments/${commentId}`);
	console.log(' '.repeat(depth*2)+comment.text);

	// Process replies in parallel
	await Promise.all(comment.replies.map(replyId=>
		fetchNestedComments(replyId, depth+1)
	));
}

/**
 * Considerations:
 * - Stack frames persist during awaits
 * - Maximum depth limited by stack + memory
 * - Better for I/O-bound than CPU-bound tasks
 */


async function fetchCommentsIterative(rootId) {
  const stack = [{ id: rootId, depth: 0 }];

  while (stack.length > 0) {
    const { id, depth } = stack.pop();
    const comment = await fetch(`/comments/${id}`);
    console.log(' '.repeat(depth * 2) + comment.text);

    for (let replyId of comment.replies.reverse()) {
      stack.push({ id: replyId, depth: depth + 1 });
    }
  }
}


// 6) Recursive Data structures beyond trees
// Graph cycle detection
function hasCycle(graph, node, visited = new Set(), recursionStack= new Set()){
	if(recursionStack.has(node)) return true;
	if(visited.has(node)) return false;

	visited.add(node);
	recursionStack.add(node);

	for(const neighbor of graph[node]){
		if(hasCycle(graph,neighbor, visited, recursionStack)){
			return true;
		}
	}

	recursionStack.delete(node);
	return false;
}


const graph = {
  A: ['B'],
  B: ['C'],
  C: ['A'] // cycle: A → B → C → A
};

console.log(hasCycle(graph, 'A')); // true


/*
 * Critical JavaScript-Specific Considerations:
	1	Stack Limits: javascript   // Typical limits (varies by browser/engine):
	2	Chrome/Firefox: ~10,000-30,000 frames
	3	Node.js: Can increase with --stack-size= (but be careful!) 
	4	Performance Tradeoffs:
	◦	Recursion is often slower than iteration due to function call overhead
	◦	But can be more readable for certain problems
	◦	Modern JS engines optimize function calls well
	5	Debugging Tips: javascript   // Add debugging to recursive functions
	6	function recursiveFn(params, depth = 0) {
	7	  console.log(`${'  '.repeat(depth)}Entering with`, params);
	8	  // ... recursive logic ...
	9	} 
	10	Alternative Patterns: javascript   // Converting recursion to iteration
	11	function factorialIterative(n) {
	12	  let result = 1;
	13	  while (n > 1) {
	14	    result *= n;
	15	    n--;
	16	  }
	17	  return result;
	18	} 
	19	Memory Management:
	◦	Recursion keeps all stack frames in memory until completion
	◦	Deep recursion can lead to O(n) space complexity
	◦	Iterative solutions often use O(1) space
When to Avoid Recursion in JS:
	1	Known Deep Recursion:
	◦	Use iteration for algorithms with predictable large depths (e.g., processing large arrays)
	2	Performance-Critical Code:
	◦	Recursion has overhead of function calls and stack management
	3	Complex State Management:
	◦	When you need fine-grained control over execution flow
When to Prefer Recursion:
	1	Natural Recursive Problems:
	◦	Tree/graph traversal
	◦	Divide-and-conquer algorithms
	◦	Problems with mathematical recurrence relations
	2	Readability Matters:
	◦	When recursive solution is significantly clearer
	◦	For prototyping before optimization
	3	Functional Programming:
	◦	When working with immutable data
	◦	In combination with map/filter/reduce

 * */


// 1) Flattening Nested Arrays (common in API response)

function flattenArray(nestedArray, result=[]){
	for(const item of nestedArray){
		if(Array.isArray(item)){
			flattenArray(item,result); // Recursive case: Item is array
		}else{
			result.push(item); // base case: item is not array
		}
	}
	return result;
}

// usage
const apiResponse = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(apiResponse)); // [1, 2, 3, 4, 5, 6]

/**
 * Real-world Use:
 * - Processing API responses with unpredictable nesting
 * - Preparing data for flat UI components
 * - Base Case: Non-array item
 * - Recursive Case: Array item
 */


// 2) Generating nested MENU HTML (Common in CMS)
function generateMenuHTML(menuItems, depth = 0) {
  return menuItems.map(item => {
    const indent = '  '.repeat(depth);
    return `
${indent}<li>
${indent}  <a href="${item.url}">${item.title}</a>
${indent}  ${item.children ? `<ul>\n${generateMenuHTML(item.children, depth + 1)}\n${indent}  </ul>` : ''}
${indent}</li>`;
  }).join('\n');
}

// Usage:
const menuData = [
  {
    title: 'Products',
    url: '/products',
    children: [
      { title: 'Electronics', url: '/electronics', children: [] }
    ]
  }
];
console.log(`<ul>\n${generateMenuHTML(menuData)}\n</ul>`);

/**
 * Why Recursion?
 * - Handles arbitrary menu depth
 * - Preserves proper HTML nesting
 * - Cleaner than iterative solution with stack management
 */



// 3) Calculating directory Sizes (File system operations)

//const fs = require('fs');
//const path = require('path');

function getDirectorySize(dirPath) {
  const items = fs.readdirSync(dirPath);
  let total = 0;
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      total += getDirectorySize(fullPath); // Recursive case
    } else {
      total += stats.size; // Base case
    }
  });
  
  return total;
}

// Usage:
console.log(getDirectorySize('./projects')); // Total bytes in all files

/**
 * Real-world Use:
 * - Disk usage analysis
 * - Backup systems
 * - Shows recursion with I/O operations
 */



// 4) Permission Inheritance System

function checkUserPermission(user, permission, checked = new Set()) {
  // Prevent circular references
  if (checked.has(user.id)) return false;
  checked.add(user.id);

  // Base Case 1: Direct permission
  if (user.permissions.includes(permission)) return true;

  // Base Case 2: Inherited from role
  if (user.role?.permissions.includes(permission)) return true;

  // Recursive Case: Check manager's permissions
  if (user.manager) {
    return checkUserPermission(user.manager, permission, checked);
  }

  return false;
}

// Usage:
const orgStructure = {
  id: 1,
  permissions: [],
  manager: {
    id: 2,
    permissions: ['approve_payments'],
    role: { permissions: [] }
  }
};
console.log(checkUserPermission(orgStructure, 'approve_payments')); // true

/**
 * Key Features:
 * - Circular reference protection
 * - Multiple inheritance paths
 * - Common in enterprise systems
 */



// 5) React component for Nested Comments
/*
function CommentThread({ comment, depth = 0 }) {
  return (
    <div style={{ marginLeft: `${depth * 20}px` }}>
      <p>{comment.text}</p>
      {comment.replies.map(reply => (
        <CommentThread 
          key={reply.id} 
          comment={reply} 
          depth={depth + 1}
        />
      ))}
    </div>
  );
}


// Usage:
const commentData = {
  id: 1,
  text: "What do you think?",
  replies: [
    {
      id: 2,
      text: "I agree!",
      replies: [] // Empty array ends recursion
    }
  ]
};


// <CommentThread comment={commentData} />

 * Why This Works:
 * - Naturally matches UI to data structure
 * - Self-similar at all levels
 * - Depth prop handles visual nesting
 */

// 6) Configuration mergin with deep overrides
function mergeConfigs(base, overrides){
	const result = {...base};

	for(const key in overrides){
		if(!Object.prototype.hasOwnProperty.call(overrides, key)) continue;

		const overrideVal = overrides[key];
		const baseVal = base[key];
		const isObject = (val) => val && typeof val === 'object' && !Array.isArray(val);
		

		if(isObject(overrideVal) && isObject(baseVal)){
			result[key] = mergeConfigs(baseVal, overrideVal);
		}else{
			result[key] = overrideVal;
		}

	}

	return result;
}



const baseConfig = {
  api: { url: 'https://api.example.com', timeout: 3000 },
  features: ['search']
};

const envConfig = {
  api: { timeout: 5000 },
  features: ['search', 'new-ui']
};

console.log(mergeConfigs(baseConfig, envConfig));


/*

const baseConfig = {
  api: { url: 'https://api.example.com', timeout: 3000 },
  auth: { tokenExpiry: '1h' },
  logging: { level: 'info', file: 'app.log' },
  features: ['search', 'analytics'],
};

const devConfig = {
  api: { timeout: 5000 }, // overrides timeout only
  logging: { level: 'debug' }, // overrides log level only
  features: ['search', 'debug-toolbar'], // replaces feature list
};

const finalConfig = mergeConfigs(baseConfig, devConfig);

console.log(finalConfig);
*/


/**
 * Real-world Use:
 * - Environment-specific configs
 * - Theme customization systems
 * - Shows recursion with object merging
 */




// 7) Dependency Resulution (package manager-like)

function resolveDependencies(package, resolved = new Set(), unresolved = new Set()) {
	unresolved.add(package.name);

	for(const dep of package.dependencies){
		if(!resolved.has(dep)){
			if(unresolved.has(dep)){
				throw new Error(`Circular dependency: ${dep}`);
			}
			resolveDependencies(getPackage(dep),resolved, unresolved);
		}
	}

	resolved.add(package.name);
	unresolved.delete(package.name);
	return Array.from(resolved);
}


// Mock package data

const packages = {
	'react':{name:'react', dependencies:[]},
	'react-dom':{name:'react-dom',dependencies:['react']},
	'my-app':{name:'my-app',dependencies:['react','react-dom']}
};


function getPackage(name) { return packages[name]};

console.log(resolveDependencies(packages['my-app']));
// ['react','react-dom','my-app']


