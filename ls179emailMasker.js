
function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const masked =
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1];

  return masked + domain;
}

// Store the email address
let email = "apple.pie@example.com";

// Call the function and output the result
console.log(maskEmail(email));

// Examples
console.log(maskEmail("apple.pie@example.com"));     // a*******e@example.com
console.log(maskEmail("freecodecamp@example.com"));  // f**********p@example.com
console.log(maskEmail("info@test.dev"));             // i**o@test.dev
console.log(maskEmail("user@domain.org"));           // u**r@domain.org