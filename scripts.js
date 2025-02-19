// scripts.js

const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const startRobloxButton = document.getElementById("startRobloxButton");
const startAutoClickerButton = document.getElementById("startAutoClickerButton");
const stopAppButton = document.getElementById("stopAppButton");
const statusDiv = document.getElementById("status");

let user = null;

// Firebase Authentication (Google login)
loginButton.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    user = result.user;
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    statusDiv.innerText = `Welcome, ${user.displayName}!`;
  } catch (error) {
    console.error(error.message);
  }
});

logoutButton.addEventListener("click", () => {
  auth.signOut();
  user = null;
  loginButton.style.display = "block";
  logoutButton.style.display = "none";
  statusDiv.innerText = "Logged out";
});

// Start Roblox or Auto Clicker
startRobloxButton.addEventListener("click", () => {
  if (user) {
    startApp("roblox");
  } else {
    statusDiv.innerText = "Please log in first!";
  }
});

startAutoClickerButton.addEventListener("click", () => {
  if (user) {
    startApp("autoclicker");
  } else {
    statusDiv.innerText = "Please log in first!";
  }
});

// Stop app
stopAppButton.addEventListener("click", () => {
  if (user) {
    stopApp();
  } else {
    statusDiv.innerText = "Please log in first!";
  }
});

// Function to start an app
function startApp(appName) {
  statusDiv.innerText = `${appName} is starting...`;
  fetch(`/startApp?name=${appName}`, { method: "POST" })
    .then(response => response.json())
    .then(data => {
      statusDiv.innerText = `${appName} is now running!`;
    })
    .catch(error => {
      console.error(error);
      statusDiv.innerText = `Error starting ${appName}`;
    });
}

// Function to stop the app
function stopApp() {
  statusDiv.innerText = "Stopping app...";
  fetch(`/stopApp`, { method: "POST" })
    .then(response => response.json())
    .then(data => {
      statusDiv.innerText = "App stopped.";
    })
    .catch(error => {
      console.error(error);
      statusDiv.innerText = "Error stopping app.";
    });
}
