document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault(); // Stop form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log({ password });

  // Password: 8+ chars, letters + digits
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;


  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Invalid email format!";
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    return;
  }

  if (!passwordPattern.test(password)) {
    errorMessage.textContent =
      "Password must be at least 8 characters and include letters & numbers.";
    errorMessage.style.display = "block";

    errorMessage.style.color = "red";
    return;
  }

  // If validation passes, hide error and redirect
  errorMessage.style.display = "none";
  window.location.href = "main.html";
});
