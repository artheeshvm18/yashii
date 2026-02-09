function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "yashii" && p === "0611") {
    window.location.href = "home.html";

  } else {
    document.getElementById("msg").innerText =
      "Wrong da 😬 Try again 💙";
  }
}
