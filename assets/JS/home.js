// Button logout
function logoutButton() {
  var btnActive = document.querySelectorAll(".logout");

  btnActive.forEach(function (button) {
    button.addEventListener("click", function (event) {
      var result = confirm("Bạn có chắc chắn muốn đăng xuất?");
      if (result) {
        window.location.href = "./index.html";
      }
    });
  });
}

// main
logoutButton();
