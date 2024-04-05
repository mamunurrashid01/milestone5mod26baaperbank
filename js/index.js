const btn = document
  .getElementById("btn")
  .addEventListener("click", function () {
    const getEmail = document.getElementById("email");
    const emailValue = getEmail.value;
    // console.log(emailValue);
    const getPass = document.getElementById("password");
    const passValue = getPass.value;
    // console.log(passValue);
    if (emailValue === "mamunur@gmail.com" && passValue === "123456") {
      window.location.href = "http://127.0.0.1:5500/bank.html";
    } else {
      alert("The invalid user");
    }
  });
