const loginLogout = () => {
  const loggedOut = document.querySelector(".profile-loggedout");
  const loggedIn = document.querySelector(".profile-loggedin");

  loggedOut.classList.toggle("hidden");
  loggedIn.classList.toggle("hidden");
};
