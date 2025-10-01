const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("loginForm");

// Always hide button first to avoid race condition
existingBtn.style.display = "none";

// Check if credentials exist in localStorage
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
  existingBtn.style.display = "block";
}

// Form submit event
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  alert("Logged in as " + username);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block";
  } else {
    // Remove credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

// Existing user login
existingBtn.addEventListener("click", function () {
  alert("Logged in as " + localStorage.getItem("username"));
});