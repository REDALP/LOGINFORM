function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var isValid = true;
  
    // Reset error messages
    usernameError.textContent = "";
    passwordError.textContent = "";
  
    // Validate username
    if (username === "") {
      usernameError.textContent = "Username is required";
      isValid = false;
    }
  
    // Validate password
    if (password === "") {
      passwordError.textContent = "Password is required";
      isValid = false;
    }
  
    // Hardcoded validation (Replace with your real validation logic)
    if (isValid) {
      if (username !== "RED" || password !== "8525") {
        alert("Invalid username or password");
        isValid = false;
      }
    }
  
    if (isValid) {
      alert("Login successful!");
      // Here you might want to redirect to another page or perform other 
      var scriptElement = document.createElement("script");
      scriptElement.url="intro.html"; // Replace "another_page.html" with your desired HTML page URL
      document.head.appendChild(scriptElement);
    }
  }
