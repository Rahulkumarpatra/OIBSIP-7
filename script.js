const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

const message = document.getElementById("message");
const welcomePage = document.getElementById("welcome-page");
const userNameSpan = document.getElementById("user-name");

registerBtn.addEventListener("click", () => {
    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    if (username === "" || password === "") {
        message.textContent = "Please enter username and password.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username]) {
        message.textContent = "Username already exists.";
        return;
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    message.style.color = "green";
    message.textContent = "Registration successful! You can login now.";
    document.getElementById("reg-username").value = "";
    document.getElementById("reg-password").value = "";
});

loginBtn.addEventListener("click", () => {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[username] && users[username] === password) {
        message.textContent = "";
        document.getElementById("login-form").style.display = "none";
        document.getElementById("register-form").style.display = "none";
        welcomePage.style.display = "block";
        userNameSpan.textContent = username;
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
});

logoutBtn.addEventListener("click", () => {
    welcomePage.style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "block";
});
