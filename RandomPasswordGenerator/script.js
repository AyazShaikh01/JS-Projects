// Function to generate a random password
function generateOTP() {
  const length = 6; // Change this to set desired password length
  const charset =
    "0123456789";
  let password = "";

  // Loop to generate random characters
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    console.log(randomIndex);
    password += charset[randomIndex];
  }
  return password;
}

// Event listener for the "Generate Password" button
document.getElementById("generateBtn").addEventListener("click", function () {
  const generatedPassword = generateOTP();
  document.getElementById("password").value = generatedPassword;

});

// Event listener for copying password to clipboard
document.getElementById("password").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  document.execCommand("copy");
  
  // Alert the user that the password has been copied
  alert("Password copied to clipboard!");
});