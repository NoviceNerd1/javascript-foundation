/*
 * Decorators and Forwarding, Call/Apply in JavaScript
 *
 * Decorators are wrapper functions that modify or enhance the behavior of other functions
 * without changing their original code. This provides flexibility and reusability.
 */

// Basic Caching Decorator Example

/**
 * Original CPU-heavy function with stable results (same input always returns same output)
 * @param {number} x - Input value
 * @returns {number} The input value (simplified for example)
 */

function slow(x) {
  // There would typicall be a CPU-intensive computation here
  console.log(`Called with ${x}`);
  return x;
}
console.log(slow(39));

/**
 * Caching decorator that adds memoization to any function
 * @param {Function} func - The function to decorate
 * @returns {Function} A wrapped version of the function with caching
 */

function cachingDecorator(func) {
  // create a Map to store cached results (Map is better than Objeect for this)
  let cache = new Map();

  // Return a wrapper function that handlers the caching logic
  return function (x) {
    if (cache.has(x)) {
      // check if result is already cached
      return cache.get(x); // Return cached result if available
    }

    let result = func(x); // Call original funciton if not cached

    cache.set(x, result); // Store result in cache
    return result;
  };
}

// Apply the decorator to the slow function
slow = cachingDecorator(slow);

// Test the decorated function
console.log(slow(1));
console.log("Again" + slow(1));
console.log(slow(2));
console.log("Again" + slow(2));

/*
 * Benefits of this approach:
 * 1. Reusable decorator can be applied to any function
 * 2. Keeps caching logic separate from business logic
 * 3. Allows combining multiple decorators
 * 4. Maintains original function interface
 */

// Handling object Methods and 'this' Context

let worker = {
  someMethod() {
    return 1;
  },

  /**
   * CPU-heavy method that uses 'this' context
   * @param {number} x - Input value
   * @returns {number} x multiplied by someMethod's result
   */

  slow(x) {
    console.log(`Called with ${x}`);
    return x * this.someMethod();
  },
};

// Initial undercoated call works
console.log(worker.slow(1));

// Apply basic caching decorator - will break 'this' context
// worker.slow = cachingDecorator(worker.slow);
// console.log(worker.slow(2));

/*
 * The issue occurs because:
 * 1. When we call the decorated worker.slow(2), the wrapper receives x=2 and this=worker
 * 2. But when it calls func(x) directly, it loses the 'this' context
 * 3. We need to explicitly pass the context using func.call()
 */

// FORWARDING

/**
 * Improved caching decorator that preserves 'this' context
 * @param {Function} func - The function to decorate
 * @returns {Function} A wrapped version that maintains context
 */

function cachingDecorator2(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    // Use func.call() to preserve "this" context
    let result = func.call(this, x); // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}

// Re-decorate with fixed version
worker.slow = cachingDecorator2(worker.slow);
console.log(worker.slow(2)); // works now
console.log(worker.slow(2)); // returns cached result

// Handling multiple arguments
let worker2 = {
  /**
   * Method with multiple parameters
   * @param {number} min - First number
   * @param {number} max - Second number
   * @returns {number} Sum of parameters
   */

  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  },
};

/**
 * Enhanced caching decorator for multiple arguments
 * @param {Function} func - Function to decorate
 * @param {Function} hash - Function to create cache keys from arguments
 * @returns {Function} Decorated function
 */

function cachingDecorator3(func, hash) {
  let cache = new Map();

  return function () {
    // Create a cache key from all arguments
    let key = hash(arguments);

    if (cache.has(key)) {
      return cache.get(key);
    }

    // Use func.call with all arguments (using spread syntax)
    let result = func.call(this, ...arguments);

    cache.set(key, result);
    return result;
  };
}

/**
 * Creates a hash key from arguments
 * @param {IArguments} args - Arguments object
 * @returns {string} Comma-separated argument list
 */

function hash(args) {
  return Array.from(args).join(",");
}

// Alternative hash using method borrowing:
function hash1() {
  return [].join.call(arguments, ",");
}

// Apply decorator with hash function
worker.slow = cachingDecorator3(worker.slow, hash);

console.log(worker.slow(3, 5)); // computes and caches
console.log("Again: " + worker.slow(3, 5)); // returns cached result

// ===== Using func.apply() =====
/*
 * func.apply(context, args) is similar to func.call(context, ...args) but:
 * - call accepts argument list
 * - apply accepts array-like object
 */

// Example of call VS apply
function say(phrase) {
  console.log(this.name + " : " + phrase);
}

let user = { name: "John" };

// Equivalent calls:
say.call(user, "Hello");
say.apply(user, ["hello"]);

//In our decorator, we could replace:
// func.call(this,...arguments) with:
// func.apply(this, arguments)

// ===== Method Borrowing =====
/*
 * Technique of using a method from one object in the context of another
 * Common with array methods applied to array-like objects (like arguments)
 */

// Example with arguments object
function hash2() {
  // arguments.join() wouldn't work(not a real array)
  // So we borrow Array.prototype.join:

  return [].join.call(arguments, ",");
}

// ===== Decorator Limitations =====
/*
 * Decorators don't preserve function properties from the original function
 * If needed, more advanced techniques like Proxy are required
 */

// ===== Summary =====
/*
 * Key concepts:
 * 1. Decorators wrap functions to modify behavior without changing original code
 * 2. Use func.call(context, ...args) or func.apply(context, args) to:
 *    - Preserve 'this' context
 *    - Forward all arguments
 * 3. Method borrowing allows using array methods on array-like objects
 * 4. Decorators enable clean separation of concerns and reusability
 */

// ==================================================================================

/**
 * Decorator that measures and logs function execution time
 * @param {Function} func - Function to time
 * @returns {Function} Wrapped function with timing
 */

function timingDecorator(func) {
  return async function (...args) {
    const start = performance.now();
    const result = await func.apply(this, args);
    const end = performance.now();

    const message = `${func.name} executed in ${(end - start).toFixed(2)}ms`;
    console.log(message);

    document.getElementById("output").textContent += message + "\n";
    return result;
  };
}

// Simulated Database class
class Database {
  async query(sql) {
    // Simulate DB latency (100-300ms)
    await new Promise((resolve) =>
      setTimeout(resolve, 100 + Math.random() * 200)
    );
    return `Result for: ${sql}`;
  }
}

// Apply the decorator
Database.prototype.query = timingDecorator(Database.prototype.query);

const db = new Database();

document.getElementById("runQuery").addEventListener("click", async () => {
  const results = await db.query("Select * FROM users");
  document.getElementById("output").textContent += results + "\n";
});

/**
 * Decorator that retries failed operations
 * @param {Function} func - Function to decorate
 * @param {number} retries - Max retry attempts
 * @param {number} delay - Delay between retries (ms)
 * @returns {Function} Wrapped function with retry logic
 */

function retryDecorator(func, retries = 3, delay = 1000) {
  return async function (...args) {
    let lastError;

    for (let i = 0; i < retries; i++) {
      try {
        return await func.apply(this, args);
      } catch (e) {
        lastError = e;
        const message = `Attempt ${i + 1} failed. Retrying...`;
        console.log(message);

        document.getElementById("retry_output").textContent += message + "\n";
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
    throw lastError;
  };
}

// Simulated API calls with 30% failure rate
async function fetchUserData(userId) {
  // Randomly fail
  if (Math.random() < 0.3) throw new Error("API Error");

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { id: userId, name: "John Doe" };
}

const reliableFetch = retryDecorator(fetchUserData, 3, 1000);

document.getElementById("fetchData").addEventListener("click", async () => {
  const output = document.getElementById("retry_output");
  output.textContent = ""; // clear previous output

  try {
    const data = await reliableFetch(123);
    output.textContent += "✅ Success: " + JSON.stringify(data) + "\n";
  } catch (error) {
    output.textContent += "❌ Failed after retries: " + error.message + "\n";
  }
});

// Rate Limit Decorator
/**
 * Decorator that enforces rate limiting
 * @param {Function} func - Function to decorate
 * @param {number} limit - Max calls per interval
 * @param {number} interval - Time window in ms
 * @returns {Function} Rate-limited function
 */

function rateLimitDecorator(func, limit, interval) {
  let calls = [];

  return function (...args) {
    const now = Date.now();

    // Keep only calls within the interval window
    calls = calls.filter((time) => time > now - interval);

    if (calls.length >= limit) {
      throw new Error(`Rate limit exceeded: ${limit} calls per ${interval}ms`);
    }

    calls.push(now);
    return func.apply(this, args);
  };
}

// Real world class API Client
class ApiClient {
  fetchData() {
    console.log("Data fetched!");
    return "data";
  }
}

// Limit to 2 calls per second
ApiClient.prototype.fetchData = rateLimitDecorator(
  ApiClient.prototype.fetchData,
  2,
  1000
);

const client = new ApiClient();

const output = document.getElementById("rate_output");
document.getElementById("fetchBtn").addEventListener("click", () => {
  try {
    const result = client.fetchData();
    output.textContent += `✅${result}\n`;
  } catch (e) {
    output.textContent += `❌ ${e.message}`;
  }
});

// Argument Validation decorator
/**
 * Decorator that validates function arguments
 * @param {Function} func - Function to decorate
 * @param {Function[]} validators - Array of validator functions
 * @returns {Function} Wrapped function with validation
 */
function validateDecorator(func, validators) {
  return function (...args) {
    validators.forEach((validator, i) => {
      if (!validator(args[i])) {
        throw new Error(`Invalid argument at position ${i}`);
      }
    });
    return func.apply(this, args);
  };
}

// Real-world usage: User registration
function registerUser(username, password) {
  return `✅ Registered user: ${username}`;
}

// Validators
const isString = (val) => typeof val === "string" && val.trim().length > 0;
const isStrongPassword = (pass) => typeof pass === "string" && pass.length >= 8;

const safeRegister = validateDecorator(registerUser, [
  isString,
  isStrongPassword,
]);

// Form handling
const output2 = document.getElementById("validation_output");
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const result = safeRegister(username, password);
    output2.textContent += result + "\n";
  } catch (err) {
    output2.textContent += `❌ ${err.message}\n`;
  }
});

/**
 * Advanced memoization decorator with custom cache key generator
 * @param {Function} func - Function to memoize
 * @param {Function} keyGenerator - Creates cache keys from args
 * @returns {Function} Memoized function
 */
function memoize(func, keyGenerator = JSON.stringify) {
  const cache = new Map();
  return async function (...args) {
    const key = keyGenerator(args);
    if (cache.has(key)) {
      log("Returning cached result");
      return cache.get(key);
    }
    const result = await func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Real-world usage: Weather API client
class WeatherService {
  async getForecast(city, date) {
    log(`Fetching fresh forecast for ${city} on ${date}`);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      city,
      date,
      temp: (20 + Math.random() * 10).toFixed(1),
      conditions: ["sunny", "cloudy", "rainy"][Math.floor(Math.random() * 3)],
    };
  }
}

// Custom cache key generator (ignore time for same-day requests)
function weatherKeyGenerator(args) {
  const [city, date] = args;
  const dateOnly = new Date(date).toISOString().split("T")[0];
  return `${city}-${dateOnly}`;
}

// Apply memoization
WeatherService.prototype.getForecast = memoize(
  WeatherService.prototype.getForecast,
  weatherKeyGenerator
);

const weather = new WeatherService();
const memoization_output = document.getElementById("memoization_output");

function log(message) {
  memoization_output.textContent += `${message}\n`;
}

document.getElementById("forecastBtn").addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  const date =
    document.getElementById("date").value || new Date().toISOString();
  try {
    const forecast = await weather.getForecast(city, date);
    log(`Result: ${JSON.stringify(forecast)}`);
  } catch (err) {
    log(`Error: ${err.message}`);
  }
});

// Authorization Decorator

/**
 * Decorator that adds authorization check
 * @param {Function} func - Function to protect
 * @param {string} requiredRole - Required role to execute
 * @returns {Function} Protected function
 */
function authorizeDecorator(func, requiredRole) {
  return function (user, ...args) {
    if (user.role !== requiredRole) {
      throw new Error(`Unauthorized: Requires ${requiredRole} role`);
    }
    return func.apply(this, [user, ...args]);
  };
}

// Real-world usage: Admin dashboard functions
class Dashboard {
  viewAnalytics(user) {
    return "📊 Sensitive analytics data";
  }
  manageUsers(user) {
    return "👥 User management panel";
  }
}

// Protect methods
Dashboard.prototype.viewAnalytics = authorizeDecorator(
  Dashboard.prototype.viewAnalytics,
  "analyst"
);

Dashboard.prototype.manageUsers = authorizeDecorator(
  Dashboard.prototype.manageUsers,
  "admin"
);

const dashboard = new Dashboard();
const auth_output = document.getElementById("auth_output");

function auth_log(msg) {
  auth_output.textContent += msg + "\n";
}

document.getElementById("viewAnalyticsBtn").addEventListener("click", () => {
  const role = document.getElementById("role").value;
  try {
    const result = dashboard.viewAnalytics({ role });
    auth_log(`✅ ${role} accessed: ${result}`);
  } catch (e) {
    auth_log(`❌ ${role} blocked: ${e.message}`);
  }
});

document.getElementById("manageUsersBtn").addEventListener("click", () => {
  const role = document.getElementById("role").value;
  try {
    const result = dashboard.manageUsers({ role });
    auth_log(`✅ ${role} accessed: ${result}`);
  } catch (e) {
    auth_log(`❌ ${role} blocked: ${e.message}`);
  }
});
