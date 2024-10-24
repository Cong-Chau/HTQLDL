// Nút đăng ký của trang login || register
function registerButton() {
  var btnRegister = document.querySelectorAll(".register");
  btnRegister.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Lấy tên thẻ login-form
      var parentClass = event.target.parentElement.className;
      // ----btn đăng ký của form đăng nhập
      if (parentClass === "login-form") {
        // Đi đến trang đăng ký
        event.target.parentElement.classList.add("hide-form");
        var registerForm = document.querySelector(".register-form");
        registerForm.classList.remove("hide-form");
      }

      // ----btn đăng ký của form đăng ký
      if (parentClass === "register-form") {
        // Thao tác lưu tài khoản mới đã được tạo
        // ...

        alert("Tài khoản đã được lưu, bạn sẽ quay về trang đăng nhập");
        event.target.parentElement.classList.add("hide-form");
        var loginForm = document.querySelector(".login-form");
        loginForm.classList.remove("hide-form");
      }
    });
  });
}

// Nút quên mật khẩu
function forgetPassButton() {
  var btnActive = document.querySelectorAll(".forget-password");
  btnActive.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Đi đến trang tìm tài khoản
      event.target.parentElement.classList.add("hide-form");
      var getNextForm = document.querySelector(".forget-form");
      getNextForm.classList.remove("hide-form");
    });
  });
}

// Nút đã có tài khoản
function haveAccountButton() {
  var btnActive = document.querySelectorAll(".have-account");
  btnActive.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.target.parentElement.classList.add("hide-form");
      var getNextForm = document.querySelector(".login-form");
      getNextForm.classList.remove("hide-form");
    });
  });
}

// Nút Tìm tài khoản
function findAccountButton() {
  var btnActive = document.querySelectorAll(".find-account");
  btnActive.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Kiểm tra tên tài khoản đã nhập và đi đến trang reset mật khẩu
      // ...

      event.target.parentElement.classList.add("hide-form");
      var getNextForm = document.querySelector(".resetpass-form");
      getNextForm.classList.remove("hide-form");
    });
  });
}

// Nút lưu mật khẩu
function buttonSavePass() {
  var btnActive = document.querySelectorAll(".save-pass");
  btnActive.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Thao tác cập nhật lại dữ liệu thay đổi
      // ...

      alert("Mật khẩu mới của bạn đã được lưu, quay trở về trang đăng nhập");
      event.target.parentElement.classList.add("hide-form");
      var getNextForm = document.querySelector(".login-form");
      getNextForm.classList.remove("hide-form");
    });
  });
}

function buttonLogin() {
  var btnActive = document.querySelector(".login");
  btnActive.onclick = function () {
    // Thao tác lấy tên đăng nhập và mật khẩu để kiểm tra tính đúng sai
    // ...

    window.location.href = "./home.html";
  };
}

// main
registerButton();
forgetPassButton();
haveAccountButton();
findAccountButton();
buttonSavePass();
buttonLogin();
