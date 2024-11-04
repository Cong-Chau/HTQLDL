// Nút đăng ký của trang login || register
function registerButton() {
  let btnRegister = document.querySelectorAll(".register");
  if (btnRegister.length === 0) {
    console.error("Không tìm thấy nút đăng ký.");
    return; // Kết thúc hàm nếu không tìm thấy nút
  }

  btnRegister.forEach(function (button) {
    button.addEventListener("click", function (event) {
      let parentClass = event.target.parentElement.className;

      if (parentClass === "login-form") {
        event.target.parentElement.classList.add("hide-form");
        let registerForm = document.querySelector(".register-form");
        registerForm.classList.remove("hide-form");
      }

      if (parentClass === "register-form") {
        // Kiểm tra tên tài khoản đã tồn tại hay chưa
        fetch("./assets/dataJSON/account.JSON")
          .then((response) => response.json())
          .then((data) => {
            let inputNameAcc = document.querySelector(
              ".register-form .name-account"
            );
            let nameAccountValue = inputNameAcc.value;
            let found = data.some(
              (user) => user.nameAccount === nameAccountValue
            );
            if (found) {
              inputNameAcc.classList.add("red-error");
              alert("Tên tài khoản đã tồn tại");
            } else {
              let inputPassword = document.querySelector(
                ".register-form .pass-account"
              );
              let password = inputPassword.value;
              let confirmPass = document.querySelector(".confirm-pass");
              let confirm = confirmPass.value;

              if (password !== confirm) {
                inputPassword.classList.add("red-error");
                confirmPass.classList.add("red-error");
                alert("Mật khẩu xác nhận không chính xác");
              } else {
                // Xu ly luu tai khoan moi duoc tao
                // ...
                alert("Tài khoản đã được lưu, bạn sẽ quay về trang đăng nhập");
                event.target.parentElement.classList.add("hide-form");
                let loginForm = document.querySelector(".login-form");
                loginForm.classList.remove("hide-form");
              }
            }
          })
          .catch((error) => {
            console.error("Loading JSON:", error);
          });
      }
    });
  });
}

// Nút quên mật khẩu
function forgetPassButton() {
  let btnActive = document.querySelectorAll(".forget-password");
  btnActive.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Đi đến trang tìm tài khoản
      event.target.parentElement.classList.add("hide-form");
      let getNextForm = document.querySelector(".forget-form");
      getNextForm.classList.remove("hide-form");
    });
  });
}

// Nút đã có tài khoản
function haveAccountButton() {
  let btnActive = document.querySelectorAll(".have-account");
  btnActive.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.target.parentElement.classList.add("hide-form");
      let getNextForm = document.querySelector(".login-form");
      getNextForm.classList.remove("hide-form");
    });
  });
}

// Nút Tìm tài khoản
function findAccountButton() {
  let btnActive = document.querySelectorAll(".find-account");
  btnActive.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Kiểm tra tên tài khoản đã nhập và đi đến trang reset mật khẩu
      // ...

      event.target.parentElement.classList.add("hide-form");
      let getNextForm = document.querySelector(".resetpass-form");
      getNextForm.classList.remove("hide-form");
    });
  });
}

// Nút lưu mật khẩu
function buttonSavePass() {
  let btnActive = document.querySelectorAll(".save-pass");
  btnActive.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Thao tác cập nhật lại dữ liệu thay đổi
      // ...

      alert("Mật khẩu mới của bạn đã được lưu, quay trở về trang đăng nhập");
      event.target.parentElement.classList.add("hide-form");
      let getNextForm = document.querySelector(".login-form");
      getNextForm.classList.remove("hide-form");
    });
  });
}

// Nút đăng nhập
function buttonLogin() {
  let btnActive = document.querySelector(".login");
  if (!btnActive) {
    console.error("Nút đăng nhập không tồn tại.");
    return; // Kết thúc hàm nếu không tìm thấy nút
  }

  btnActive.onclick = function () {
    let nameAccount = document.querySelector(".name-account").value;
    let password = document.querySelector(".pass-account").value;
    fetch("./assets/dataJSON/account.JSON")
      .then((response) => response.json())
      .then((data) => {
        let found = data.some(
          (user) =>
            user.nameAccount === nameAccount && user.password === password
        );
        if (found) {
          localStorage.setItem("userName", nameAccount);
          window.location.href = "./home.html";
        } else {
          let inputNameAcc = document.querySelector(".name-account");
          let inputPass = document.querySelector(".pass-account");
          inputNameAcc.classList.add("red-error");
          inputPass.classList.add("red-error");
          alert("Tên đăng nhập hoặc mật khẩu sai");
        }
      })
      .catch((error) => {
        console.error("Loading JSON:", error);
      });
  };
}

// main
registerButton();
forgetPassButton();
haveAccountButton();
findAccountButton();
buttonSavePass();
buttonLogin();
