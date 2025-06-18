// Interactions: alert, prompt, confirm
//


// alert 
//alert("Hello")	// mini-window with message -> MODAL WINDOW

// "modal" means, visitor cant interact with the rest of the page, until they have dealth with the window.
// In this case, Until they press "OK"




// prompt
// function promt accepts two arguments
// Usage: prompt(title(text), default value(text))

let age = prompt("How old are you?",100)
console.log(`You are ${age} years old`)


// 🧑‍💻 Browser Interaction Methods: alert, prompt, confirm

// 📢 alert(message)
// Shows a modal popup with a message and an "OK" button
alert("Hello!"); // Blocks the UI until the user presses OK

// 📝 prompt(message, [default])
// Shows a modal with an input field, OK, and Cancel buttons
// Returns user input (string) or null if Cancel/Esc is pressed
let age = prompt("How old are you?", "25");
alert(`You are ${age} years old!`);

// ⚠️ IE quirk: If you omit the second param, IE may show "undefined" in the input field
// Always pass a default value to avoid ugly surprises
let name = prompt("Enter your name", "");

// ✅ confirm(message)
// Shows a modal with OK and Cancel
// Returns true if OK is clicked, false if Cancel/Esc
let isAdmin = confirm("Are you an admin?");
alert(isAdmin); // true or false

// 📌 Common Traits:
// - All are modal: they block interaction with the page until dismissed
// - Cannot be styled or repositioned — browser controls appearance/location

// 🛠 For better UI/UX, prefer custom modals (e.g., using HTML/CSS/JS frameworks) in production apps
























