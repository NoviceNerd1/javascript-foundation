/*
 * GLOBAL OBJECT IN JAVASCRIPT
 * 
 * The global object provides variables and functions available anywhere in the code.
 * It includes built-in language features and environment-specific properties.


/* 
 * ENVIRONMENT-SPECIFIC GLOBAL OBJECT NAMES:
 * - Browser: window
 * - Node.js: global
 * - Web Workers: self
 * - Universal: globalThis (standardized name across all environments)
 * 
 * Recommendation: Use globalThis for cross-environment compatibility,
 * but we'll use window for these examples assuming a browser environment.
 */

const { performance } = require('perf_hooks');
//const fetch = require('node-fetch'); // if not using built-in fetch


// Define a global function(not recomended in production)
global.sayHello = function() {
  console.log("Hello from global Scope");
};

sayHello();
global.sayHello();

/*
 * GLOBAL VARIABLES AND var DECLARATIONS
 * 
 * In browsers, when not using modules:
 * - Variables declared with var become properties of the global object
 * - Function declarations (not expressions) also become properties
 * 
 * Note: This doesn't happen with let/const declarations
 */

var gVar = 5;
function globalFunc() { return "hi! from global Object"; }

let gLet = 10;
const gConst = 20;

console.log(global.gVar);
console.log(global.globalFunc);


console.log(gVar);
console.log(globalFunc());

console.log(global.gLet);
console.log(global.gConst);



/*
 * BEST PRACTICES FOR GLOBAL VARIABLES:
 * 1. Minimize use of global variables
 * 2. When necessary, explicitly assign to window/globalThis
 * 3. Always access via window/globalThis when name conflicts might exist
 */


// Explicit global variable aassignment
global.currentUser = {
  name: "John",
  aage: 30
};

// Safe access when local variables might shadow the global
let currentUser = 'test';
console.log(currentUser);
console.log(global.currentUser);



/* 
 * POLYFILLS PATTERN
 * 
 * The global object is used to test for and add missing modern features
 * in older environments (polyfilling).
 * */

// Check if promise exists in older browser
if (typeof global.Promise === 'undefined') {
  console.log('This node environment doesnt support Promises!');
  // Minimal dummy plyfill (not production safe , for example only)

  global.Promise = class Promise {
    constructor(fn) {
      console.warn('Using plyfilled Promise (not spec-compliant)');
      fn(() => { }, () => [{}]);
    }
    then() { return this; }
    catch() { return this; }
  };
}


/*
 * SUMMARY OF KEY POINTS:
 * 1. The global object stores universally accessible variables/functions
 * 2. Includes built-ins (Array, Object) and environment specifics (window.innerHeight)
 * 3. Modern code should use globalThis for cross-environment compatibility
 * 4. var declarations become window properties (in non-module scripts)
 * 5. let/const declarations don't become window properties
 * 6. Minimize global variables - use explicit window.x when necessary
 * 7. Useful for feature detection and polyfilling
 * 
 * Note: Modern JavaScript modules have their own scope, where top-level declarations
 * don't automatically become global properties.
 */

// Modern best practice for globals (cross-environment)
globalThis.appConfig = {
  version: "1.0",
  environment: "production"
};

console.log(globalThis.appConfig);



// 1) Application Configuration

// Instead of scattering configs throughout code, centralize them as global
// (But better to use a config module in real apps- this is just for demo)

globalThis.appConfig = {
  apiBaseUrl: 'https://api.example.com/v2',
  maxRetries: 3,
  debugMode: false,
  featureFlags: {
    newDashboard: true,
    darkMode: false,
  },
};

// Usage anywhere in the app
function fetchUser(userId) {
  // access global config
  const url = `${globalThis.appConfig.apiBaseUrl}/users/${userId}`;

  fetch(url)
    .then(response => {
      if (!response.ok && globalThis.appConfig.debugMode) {
        console.warn('API request failed', { url, status: response.status });
      }
      return response.json();
    })
    .catch((err) => {
      if (globalThis.appConfig.debugMode) {
        console.error('Fetch error:', err);
      }
    });
}

fetchUser(23);


// 2) Feature Detection & Polyfilling

/*
 * -> Check for WebP image support
 if(!globalThis.supportsWebP){
  // create a test image to detect WebP support 
  const testImage = new Image();
  testImage.onload= function() {
    globalThis.supportsWebP = (testImage.width > 0 && testImage.height > 0);
  };

  testImage.onerror = function() {
    globalThis.supportsWebP = false;
  };
  testImage.src = 'data:image/webP;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
 }

 // Usage in image loading logic
 function getImageUrl(format){
  if(format === 'auto' && globalThis.supportsWebP){
    return '/assets/images/hero.webp';
  }
  return '/assets/images/hero.jpg';
 }
 * */


// 3) Performance metrics

// Load nodejs modules
//const performance = require('perf_hooks');
//const fetch = require('node-fetch'); // if not using built-in fetch

// Simulated global app config
globalThis.appConfig = {
  debugMode: true,
};


globalThis.performanceMetrics = {
  pageLoadStart: performance.now(),
  assetsLoaded: 0,
  totalAssets: 0
};

// Function to load asset and track performance
async function loadAsset(url) {
  globalThis.performanceMetrics.totalAssets++;

  const startTime = performance.now();

  try {
    await fetch(url); // Could be a local or remote file
    globalThis.performanceMetrics.assetsLoaded++;

    const loadTime = performance.now() - startTime;

    if (globalThis.appConfig.debugMode) {
      console.log(`Asset loaded in ${loadTime.toFixed(2)}ms: ${url}`);
    }
  } catch (err) {
    console.error(`Failed to load asset: ${url}`, err);
  }
}


(async () => {
  await Promise.all([
    loadAsset('https://jsonplaceholder.typicode.com/posts/1')
  ]);

  console.log(globalThis.performanceMetrics);
})();

globalThis.appConfig = { debugMode: true };

loadAsset('https://example.com/image1.png');
loadAsset('https://example.com/image2.png');
//loadAsset('https://example.com/image3.png');


// 4) Error handling

// central error tracking (would connect to sentry/LogROcket in real app)

globalThis.errorTracker = {
  errors: [],
  track(error, context = {}) {
    this.errors.push({
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context
    });

    if (globalThis.appConfig.debugMode) {
      console.error('Tracked error:', error, context);
    }
  },
  report() {
    // In real app, would send to error tracking service
    return this.errros;
  }
};

// Usage in try-catch blocks 
try {
  // code that might fail
  console.log(apple);
}
catch (err) {
  globalThis.errorTracker.track(err, {
    component: 'UserProfile',
    userId: currentUser.id
  });
}











