// ===============================
// 🌗 Light/Dark Mode Toggle
// ===============================
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// ===============================
// 🎮 Counter Button Game
// ===============================
let count = 0;
const counterBtn = document.getElementById("counter-btn");
const counterValue = document.getElementById("counter-value");

counterBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = `Count: ${count}`;
});

// ===============================
// ❓ Collapsible FAQ Section
// ===============================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// ===============================
// 📋 Form Validation
// ===============================
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formSuccess = document.getElementById("form-success");

// Regular Expressions for Validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

// Validate Fields on Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  formSuccess.textContent = "";

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent =
      "Password must be at least 6 characters, contain one uppercase letter, and one number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Show Success Message
  if (isValid) {
    formSuccess.textContent = "Form submitted successfully! 🎉";
    form.reset();
  }
});
