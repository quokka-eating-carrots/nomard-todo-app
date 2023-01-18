const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

function newGreeting (event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden");
  loginForm.classList.remove("login-form");
  greeting.classList.remove("hidden");
  existGreeting(username);
  // greeting.innerText = `오늘도 힘내 보자구, ${username}`
}

// loginForm.addEventListener("submit", newGreeting);

function existGreeting (username) {
  greeting.innerText = `오늘도 힘내 보자구, ${username}`
}

const savedUser = localStorage.getItem("username");

if (savedUser === null) {
  loginForm.classList.remove("hidden");
  loginForm.classList.add("login-form");
  greeting.classList.add("hidden");
  loginForm.addEventListener("submit", newGreeting);
} else {
  loginForm.classList.add("hidden");
  loginForm.classList.remove("login-form");
  greeting.classList.remove("hidden");
  existGreeting(savedUser);
}


