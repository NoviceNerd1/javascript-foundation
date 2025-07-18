// ===============================
// ✅ Polyfills and Transpilers
// ===============================

// JavaScript is constantly evolving with new syntax and built-in features.
// However, older browsers and engines may not support them yet.

// To safely use modern JS features in production across all environments,
// we use two tools: transpilers and polyfills.

// -------------------------------
// 🔄 Transpilers (e.g. Babel)
// -------------------------------
// Transpile = convert modern JS syntax into equivalent older syntax.
// Example: nullish coalescing operator ?? is not supported in older engines:

// Original code (modern JS):
let height;
height = height ?? 100;
console.log(height);

// Transpiled version (compatible with older JS engines):
height = (height !== undefined && height !== null) ? height : 100;
console.log(height);
// Transpilers are usually integrated into build tools (like Webpack via babel-loader),
// and run locally before deployment.

// -------------------------------
// 🧩 Polyfills (e.g. core-js)
// -------------------------------
// Polyfill = a runtime script that adds missing built-in functions or APIs.

// Example: Math.trunc() might not exist in older environments.
// Polyfill manually defines it if missing:

if (!Math.trunc) {
  Math.trunc = function (number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}

// Polyfills are needed only for features like new functions or objects,
// not syntax. They can be included manually or via libraries like core-js.

// -------------------------------
// 📌 Summary Guidelines
// -------------------------------
// ✅ Use modern JS features to write clean, expressive code.
// ✅ Use a transpiler (e.g. Babel) for new syntax support.
// ✅ Use polyfills for new built-in functions (e.g. fetch, Promise, etc).
// ✅ Integrate both into your build toolchain (Webpack, Vite, etc).
// ✅ Reference compatibility:
//     https://compat-table.github.io/compat-table/es6/
//     https://caniuse.com/

// This approach ensures your codebase remains modern, yet compatible.
