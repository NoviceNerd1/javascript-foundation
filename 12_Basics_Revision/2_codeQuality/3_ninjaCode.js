// =========================
// ⚔️ "NINJA CODE" — SATIRICAL SUMMARY
// =========================

// 🧠 Rule 0: Learn with thought. Code with sense. Or perish in confusion.

// ------------------------------------------------
// 🥷 BREATHLESS BREVITY
// ------------------------------------------------

// Be as short as possible. Let your coworkers decipher your genius.
i = i ? i < 0 ? Math.max(0, len + i) : i : 0; // 🤯 One-liner of terror

// ------------------------------------------------
// 🔤 SINGLE-LETTER VARIABLES
// ------------------------------------------------

// Variables like a, b, x, y — short, elegant, and impossible to trace
let x = y = z = data = value = item = obj = str = num = {}; // 🥷 Obfuscation achieved

// Never use 'i' in loops — that's what amateurs do
for (let q = 0; q < 99; q++) {
  // May the force of cryptic indexing be with you
}

// ------------------------------------------------
// ✂️ ABBREVIATIONS
// ------------------------------------------------

// Cut names ruthlessly: userAgent → ua, browser → brsr
let lst = getLst(), ua = detectUA(), brsr = getBRSR();

// ------------------------------------------------
// 🌀 ABSTRACT & MEANINGLESS NAMES
// ------------------------------------------------

// Use words like value, data, item — avoid conveying any actual meaning
function handle(data) {
  let value = process(data);
  return value;
}

// ------------------------------------------------
// 🎭 SIMILAR NAMES TRAP
// ------------------------------------------------

// Mix variables like data vs date — attention test unlocked
let data = "junk", date = new Date(); // Which is which? Enjoy the mystery!

// ------------------------------------------------
// 🧞 SYNONYMS GALORE
// ------------------------------------------------

// Same behavior, different prefixes = ultra creativity
function displayUser() { }
function showUser() { }
function renderUser() { }
function paintUser() { } // Same function, four names. Stunning.

// Also: same prefix, different actions. Psychological warfare.
function printPage(p) { /* sends to printer */ }
function printText(t) { /* shows in modal */ }
function printMessage(m) { /* opens a popup */ }

// ------------------------------------------------
// 🔁 VARIABLE REUSE
// ------------------------------------------------

// Why create new variables when you can repurpose the old ones?
function doSomething(x) {
  x = mutate(x); // Surprise!
  return x;
}

// ------------------------------------------------
// 🎭 SHADOWING MASTERCLASS
// ------------------------------------------------

let user = getUser(); // external user

function render() {
  let user = {}; // internal betrayal
  // Hundreds of lines later...
  process(user); // Is it the outer one? Oh no. 😱
}

// ------------------------------------------------
// 💥 SIDE EFFECTS DISGUISED AS PURE FUNCTIONS
// ------------------------------------------------

// Let them think it's safe. Then betray.
function checkPermission() {
  updateUserRole(); // sneaky mutation
  return { canAccess: true }; // not a boolean, obviously
}

if (checkPermission()) {
  // 💣 Kaboom. Not truthy as expected.
}

// ------------------------------------------------
// 🧙 POWERFUL MULTI-TASKERS
// ------------------------------------------------

// Names lie. validateEmail() does so much more...
function validateEmail(email) {
  if (!isValid(email)) {
    alert("Please fix your sins.");
    askForRedemption();
  }
}

// ------------------------------------------------
// 🧾 FINAL WORDS
// ------------------------------------------------

// ✅ Real best practices: Write clean, clear, purposeful code.
// ✅ Good naming, small functions, zero ambiguity.
// ❌ Avoid "ninja code" unless you want job security via terror.
// ☕ But if you *must* write unreadable code… at least enjoy the poetry of it.

//===============================================================
//			SARCASM ENDS
//===============================================================


// =========================
// ✅ CLEAN CODING PRINCIPLES
// =========================

// 1. 🔠 Use meaningful, descriptive variable names
// Good:
// let userEmail = "example@domain.com";
// let productList = [...];

// Bad:
// let x = "example@domain.com";   // too vague
// let lst = [...];                // abbreviated and unclear

// 2. 🎯 Keep names consistent and unambiguous
// Stick to one naming convention for similar concepts throughout the codebase.
// For example, always use "user" instead of mixing "visitor", "client", "person", etc.

// 3. 📏 Prefer clarity over brevity
// Avoid overly condensed expressions that hurt readability.
let index = (i < 0) ? Math.max(0, array.length + i) : i;  // clear
// Avoid:
let i = i ? i < 0 ? Math.max(0, len + i) : i : 0;         // hard to read

// 4. 🧩 Use full words, not cryptic abbreviations
// Good:
let userAgent = getUserAgent();

// Bad:
let ua = getUA(); // unclear, unless domain knowledge is strong

// 5. 📚 Structure your functions clearly
// One function = one responsibility

function getUserAge(user) {
  return user.age;
}

// Avoid side effects in pure functions like modifying state unexpectedly
// Bad practice:
function isReady(user) {
  user.status = "active"; // silent mutation
  return true;
}

// 6. 🧼 Reuse variable names only when it makes logical sense
// Don’t overload variables to store unrelated values

// Good:
let isLoggedIn = checkLoginStatus();
let userData = fetchUserData();

// Bad:
let data = checkLoginStatus();
data = fetchUserData(); // now 'data' means something else

// 7. 🌌 Avoid shadowing outer variables
// It creates confusion and bugs

let user = authenticate();

function render() {
  let user = {}; // This hides the outer 'user' unintentionally
  // ...
}

// Better:
function render(userData) {
  // use passed-in value clearly
}

// 8. 📘 Stick to consistent prefixes and function naming
// Follow predictable patterns like:
// get..., set..., create..., fetch..., validate..., render...

function fetchUser() { ... }
function renderUserProfile(user) { ... }

// Avoid mixing inconsistent prefixes like displayUser, showName, paintAvatar

// 9. 🧪 Be explicit about function behavior
// If a function validates something, it should return a boolean or throw.
// Don’t add unexpected UI logic inside a validator

// Good:
function isEmailValid(email) {
  return email.includes("@");
}

// Bad:
function isEmailValid(email) {
  if (!email.includes("@")) alert("Invalid email"); // hidden side-effect
  return true;
}

// 10. 🧾 Comment only when necessary
// Prefer clean code over heavy comments.
// Use comments for:
// - high-level architecture overviews
// - explaining non-obvious logic or decisions
// - documenting APIs or function usage via JSDoc

/**
 * Returns user's age from profile object
 * @param {Object} user
 * @returns {number}
 */
function getUserAge(user) {
  return user.age;
}

// Avoid obvious comments:
let count = 5; // declare a count variable ❌

// 11. 🚫 Avoid unnecessary nesting
// Handle edge cases early and return
function process(input) {
  if (!input) return;

  // continue main logic here
}

// Don’t:
function process(input) {
  if (input) {
    // more nesting, harder to read
  }
}

// 12. 📦 Split long files into logical modules
// Each module/file should handle a single concern: auth, user, product, etc.

// 13. 🧱 Group related code into functions
// Instead of repeating similar code blocks, abstract them

// Bad:
for (...) {
  // whiskey logic
}
for (...) {
  // juice logic
}

// Better:
addWhiskey(glass);
addJuice(glass);

// 14. 🔁 Always use braces for blocks — even one-liners
// This prevents bugs during later edits

// Good:
if (condition) {
  doSomething();
}

// Avoid:
if (condition) doSomething(); // risky when modified

// 15. 🚦 Avoid vague variable names like data, value, obj
// Instead, use context-specific terms

// Bad:
let data = getData();

// Good:
let invoiceDetails = getInvoiceDetails();


