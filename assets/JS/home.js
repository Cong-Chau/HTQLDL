// Lay ten dang nhap
const userName = localStorage.getItem("userName");

function getUserNameFromLogin() {
  let nameAccount = document.querySelector(".account");
  nameAccount.innerText = userName + " | ";
}

// Button logout
function logoutButton() {
  let btnActive = document.querySelector(".logout");

  btnActive.onclick = function () {
    var result = confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (result) {
      window.location.href = "./index.html";
      localStorage.removeItem("userName");
    }
  };
}

// main
getUserNameFromLogin();
logoutButton();
