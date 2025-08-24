// /*
//  * PROPERTY FLAGS AND DESCRIPTORS IN JAVASCRIPT
//  *
//  * Object properties have more functionality than just key-value pairs.
//  * Each property has three special attributes (flags):
//  * 1. writable - if true, value can be changed
//  * 2. enumerable - if true, listed in loops
//  * 3. configurable - if true, property can be deleted/modified
//  *
//  * By default, all flags are true when creating properties normally.
//  */

//const { version } = require("react");

// // Getting Property Descriptorstel

// /*
//     Object.getOwnPropertyDescriptor(obj,propertyName) - gets full property
//     info Returns a "property descriptor" object containing value and flags
// */

// // let user = {
// //   name: "John",
// // };

// // let descriptor = Object.getOwnPropertyDescriptor(user, "name");
// // console.log(descriptor);

// // // Modifying Property Flags

// // /*
// //     Object.defineProperty(obj, propertyName, descriptor) - changes flags
// //     If property exists, updates flags. Othewise creates property with given flags.

// //     Unspecified flags default to false for new properties.
// // */

// // // Example: Creating property with all flags false
// // let user1 = {};
// // Object.defineProperty(user1, "name", {
// //   value: "Jimmy",
// // });

// // console.log(Object.getOwnPropertyDescriptor(user1, "name"));

// // /*
// //     value:"John",
// //     writeable:false,
// //     enumerable: false,
// //     configureable: false
// // */

// // // FLAG BEHAVIOUR EXAMPLES

// // // Non-writable Example
// // let user2 = { name: "James" };
// // Object.defineProperty(user2, "name", {
// //   writable: false,
// // });
// // user2.name = "Adam"; // Error in strict mode, no change normally
// // console.log(user2);

// // // Non-enumerable example
// // let user3 = {
// //   name: "john",
// //   toString() {
// //     return this.name;
// //   },
// // };

// // // By default both properties are enumerable
// // Object.defineProperty(user3, "toString", {
// //   enumerable: false,
// // });
// // // now toString won't appead in for..in loops
// // console.log(user3);
// // for (let key in user3) console.log(key);

// // // Non-configurable example
// // // Math.PI is non-configurable by default

// // let piDescriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// // console.log(piDescriptor);

// // // Attempting to modify non-configurable property:
// // Math.PI = 3;
// // console.log(Math.PI); // 3.141592653589793

// // Object.defineProperty(Math, "PI", { writeable: true }); // Error

// // // Non-configurable but wrapper but writeable property can still change value

// // let user4 = { name: "John" };
// // Object.defineProperty(user4, "name", {
// //   configurable: false,
// // });
// // user4.name = "Pete"; // Works (writeable still true)
// // console.log(delete user4.name); // Error

// // // Wroking with multiple properties

// // /*
// // Object.defineProperties(obj, descriptors) - defines multiple properties
// // */

// // let user5 = {};
// // Object.defineProperties(user5, {
// //   name: { value: "John", writeable: false },
// //   surname: { value: "Smith", writeable: false },
// // });

// // console.log(user5);
// // console.log(Object.getOwnPropertyDescriptors(user5)); // gets all property descriptors
// // // Useful for flags-aware cloning

// // let clone = Object.defineProperties(
// //   {},
// //   Object.getOwnPropertyDescriptors(user5)
// // );

// // // Better than for..in which doesn't copy flags

// // // Object Sealing Methods (Global Restrictions)

// // /*
// // Object.preventExtensions(obj) - prevents adding new properties
// // Object.isExtensible(obj). - check if adding properties is allowed
// // */

// // /*
// // Object.seal(obj) - prevents adding/removing properties
// // Sets configurable: false for all properties
// // Object.isSealed(obj) - checks if sealed
// // */

// // /*
// // Object.freeze(obj) - prevents any property changes
// // Set configurable: false, writeable: false for all properties
// // Object.isFrozen(obj) - checks if frozen
// // */

// // // Example of frozen object:
// // let frozenUser = { name: "Jimmy" };
// // Object.freeze(frozenUser);
// // frozenUser.name = "Pete"; // Error, no change
// // console.log(frozenUser);
// // delete frozenUser.name; // no effect
// // //Object.defineProperty(frozenUser, "name", { value: "Pete" });
// // console.log(frozenUser);
// // console.log(Object.getOwnPropertyDescriptors(frozenUser));
// // // Important Notes

// // /*
// //  * 1. In non-strict mode, violating flag restrictions fails silently
// //  * 2. Non-configurable properties can have writable changed from true to false
// //  *    (but not back to true)
// //  * 3. Once a property is non-configurable, it cannot be made configurable again
// //  * 4. Object.getOwnPropertyDescriptors includes non-enumerable and symbol properties
// //  *    (unlike for..in)
// //  */

// // // Example 1: Creating an Immutable Configuration Object

// // // Scenario: You have app configuration that shouldn't be modified
// // const appConfig = {};

// // // Define immutable properties

// // Object.defineProperties(appConfig, {
// //   apiUrl: {
// //     value: "https://api.example.com",
// //     writeable: false,
// //     enumerable: true,
// //     configurable: false,
// //   },
// //   maxRetries: {
// //     value: 3,
// //     writeable: false,
// //     enumerable: true,
// //     configurable: false,
// //   },
// //   environment: {
// //     value: process.env.NODE_ENV || "development",
// //     writable: false,
// //     enumerable: true,
// //     configurable: false,
// //   },
// // });

// // console.log(appConfig);

// // // Try to modify  (will fail silently in non-strict mode)
// // appConfig.apiUrl = "https://hacked.com"; // won't work
// // delete appConfig.maxRetries; // won't work

// // console.log(appConfig); // Original values remain intact

// // /*
// // Why this is useful:
// //   - Prevents accidental modification of critical configuration
// //   - Makes configuration values read-only
// //   - Still allows enumeration (for logging/debugging)
// // */

// // // Example 2: Secure User Object with Hidden Properties

// // function createUser(name, password) {
// //   const user = {};

// //   // Public properties
// //   Object.defineProperty(user, "name", {
// //     value: name,
// //     writeable: true,
// //     enumerable: true,
// //     configurable: false,
// //   });

// //   // "Private" property (hidden from enumeration)
// //   Object.defineProperty(user, "_password", {
// //     value: password,
// //     writeable: false,
// //     enumerable: false, // Won't show in for..in or Object.keys()
// //     configurable: false,
// //   });

// //   // Method to access password securely
// //   Object.defineProperty(user, "getHashedPassword", {
// //     value: function () {
// //       return hash(this._password); // some hashing function
// //     },
// //     enumerable: false, // hide the method from enumeration
// //   });

// //   return user;
// // }

// // const admin = createUser("Admin", "Admin123");

// // console.log(admin);
// // console.log(Object.keys(admin));
// // for (let key in admin) console.log(key);

// // /*
// // Why this is useful:
// //   - Hides sensetive data from enumeration
// //   - Prevents direct access to _password
// //   - Still allows controlled access via methods
// //   - Makes properties tamper-resistant
// // */

// // // Example 3: Optimized Enum for performance

// // // Scenario: Create an enum-like object where values can't be changed

// // const status = Object.freeze({
// //   PENDING: Symbol("PENDING"),
// //   APPROVED: Symbol("APPROVED"),
// //   REJECTED: Symbol("REJECTED"),
// // });

// // // Alternative implementation with defineProperty
// // const PaymentStatus = {};

// // Object.defineProperties(PaymentStatus, {
// //   INITIATED: {
// //     value: 1,
// //     enumerable: true,
// //     writable: false,
// //     configurable: false,
// //   },
// //   PROCESSING: {
// //     value: 2,
// //     enumerable: true,
// //     writable: false,
// //     configurable: false,
// //   },
// //   COMPLETED: {
// //     value: 3,
// //     enumerable: true,
// //     writable: false,
// //     configurable: false,
// //   },
// //   FAILED: { value: 4, enumerable: true, writable: false, configurable: false },
// // });

// // // Object.freeze would also work, but this gives more control
// // Object.preventExtensions(PaymentStatus);
// // console.log(PaymentStatus);

// // Example 4: Observable Properties with Validation

// function createObservableObject() {
//   const data = {};
//   const listeners = [];

//   function notify(property, oldValue, newValue) {
//     listeners.forEach((l) => l(property, oldValue, newValue));
//   }

//   return {
//     defineProperty(prop, { validator, ...options }) {
//       let value = options.value;

//       Object.defineProperty(data, prop, {
//         get() {
//           return value;
//         },
//         set(newValue) {
//           if (validator && !validator(newValue)) {
//             throw new Error(`Invalid value for ${prop}`);
//           }
//           const oldValue = value;
//           value = newValue;
//           notify(prop, oldValue, newValue);
//         },
//         enumerable: options.enumerable !== false,
//         configurable: options.configurable !== false,
//       });
//     },

//     subscribe(listener) {
//       listeners.push(listener);
//       return () => {
//         const index = listeners.indexOf(listener);
//         if (index >= 0) listeners.splice(index, 1);
//       };
//     },

//     // Direct live view of data
//     data: data,

//     // Safe snapshot
//     getData() {
//       return { ...data };
//     },
//   };
// }
// function generateId() {
//   return Math.random().toString(36).slice(2, 9);
// }

// const userProfile = createObservableObject();

// userProfile.defineProperty("age", {
//   value: 25,
//   validator: (age) => age >= 18 && age <= 120,
//   enumerable: true,
// });

// userProfile.defineProperty("_internalId", {
//   value: generateId(),
//   enumerable: false,
// });

// const unsubscribe = userProfile.subscribe((prop, oldVal, newVal) => {
//   console.log(`${prop} changed from ${oldVal} to ${newVal}`);
// });

// userProfile.data.age = 30; // ✅ Logs: "age changed from 25 to 30"
// // userProfile.data.age = 15; // ❌ Throws: "Invalid value for age"

// /*
//  * Why this is useful:
//  * - Adds validation to property changes
//  * - Enables reactive programming patterns
//  * - Can hide internal properties while exposing public API
//  * - More flexible than simple property assignment
//  */

// EXAMPLE 5: Secure Plugin Architecture for Node.js

// core app object
const app = {};

// Define and lock down plugins container
Object.defineProperty(app, "plugins", {
  value: {},
  writable: false, // Can't replace add.plugins
  configurable: false, // Can't delete app.plugins
  enumerable: true,
});

// Secure plugin registration function
function registerPlugin(name, plugin, dependencies = []) {
  if (app.plugins[name]) {
    throw new Error(`Plugin "${name}" is already registered.`);
  }

  // Check if dependencies are available
  for (const dep of dependencies) {
    if (!app.plugins[dep]) {
      throw new Error(`Plugin "${name}" requires missing dependency "${dep}"`);
    }
  }

  // Lock down the plugin
  Object.defineProperty(app.plugins, name, {
    value: Object.freeze(plugin), // freeze plugins to prevent mutation
    enumerable: true,
    configurable: false,
    writable: false,
  });

  console.log(`✅ Plugin "${name}" registered successfully`);
}

// Example plugins

// Logger Plugin
const loggerPlugin = {
  log(message) {
    console.log(`[Log]: ${message}`);
  },
  version: "1.0",
};

// Configuration plugin
const configPlugin = {
  get(key) {
    const config = {
      apiUrl: "https://jsonplaceholder.typicode.com",
      retries: 3,
    };
    return config[key];
  },
  version: "1.0",
};

// database plugin (depends on config + logger)
const dbPlugin = {
  connect() {
    const url = app.plugins.config.get("apiUrl");
    app.plugins.logger.log(`Connecting to DB at ${url}...`);
    // Simulate connection
    return true;
  },
  version: "1.9",
};

// Register Plugins
try {
  registerPlugin("logger", loggerPlugin);
  registerPlugin("config", configPlugin);
  registerPlugin("db", dbPlugin, ["config", "logger"]);
} catch (e) {
  console.error("Plugin registration failed:", e.message);
}

// Usage
app.plugins.logger.log("System starting...");
app.plugins.db.connect();

// Verify immutability
try {
  app.plugins.logger.version = "2.0"; // ❌ throws in strict mode, ignored othrwise
} catch (e) {
  console.error("Mutation blocked:", e.message);
}

console.log("Registered Plugins:", Object.keys(app.plugins));
