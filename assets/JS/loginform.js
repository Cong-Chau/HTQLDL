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
        // Kiểm tra tên tài khoản đã tồn tại hay chưa
        fetch("./assets/dataJSON/account.JSON")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // Kiểm tra tên tài khoản
            let inputNameAcc = document.querySelector(
              ".register-form .name-account"
            );
            let nameAccountValue = inputNameAcc.value;
            let found = false;
            for (let i = 0; i < data.length; i++) {
              const user = data[i];
              if (user.nameAccount === nameAccountValue) {
                found = true;
                break; // Nếu tìm thấy thì thoát khỏi vòng lặp
              }
            }
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
                // Viết api gửi yêu cầu POST đến back end
                // ...
                // fetch("Địa chỉ nhận yêu cầu", {
                //   method: "POST",
                //   headers: {
                //     "Content-Type": "application/json",
                //   },
                //   body: JSON.stringify({ nameAccountValue, password }),
                // })
                //   .then(function (response) {
                //     return response.json(); // chuyển phản hồi thành định dạng json
                //   })
                //   .then(function () {
                //     alert(
                //       "Tài khoản đã được lưu, bạn sẽ quay về trang đăng nhập"
                //     );
                //     event.target.parentElement.classList.add("hide-form");
                //     var loginForm = document.querySelector(".login-form");
                //     loginForm.classList.remove("hide-form");
                //   });

                alert("Tài khoản đã được lưu, bạn sẽ quay về trang đăng nhập");
                event.target.parentElement.classList.add("hide-form");
                var loginForm = document.querySelector(".login-form");
                loginForm.classList.remove("hide-form");
              }
            }
          })
          .catch(function (error) {
            console.error("Loading JSON:", error);
          });
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

// Nút đăng nhập
function buttonLogin() {
  var btnActive = document.querySelector(".login");
  btnActive.onclick = function () {
    // Thao tác lấy tên đăng nhập và mật khẩu để kiểm tra tính đúng sai
    var nameAccount = document.querySelector(".name-account").value;
    var password = document.querySelector(".pass-account").value;

    // Nhận data
    fetch("./assets/dataJSON/account.JSON")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Kiểm tra tên tài khoản
        let found = false;
        for (let i = 0; i < data.length; i++) {
          const user = data[i];
          if (user.nameAccount === nameAccount && user.password === password) {
            found = true;
            break; // Nếu tìm thấy thì thoát khỏi vòng lặp
          }
        }
        if (found) {
          window.location.href = "./home.html";
        } else {
          var inputNameAcc = document.querySelector(".name-account");
          var inputPass = document.querySelector(".pass-account");
          inputNameAcc.classList.add("red-error");
          inputPass.classList.add("red-error");
          alert("Tên đăng nhập hoặc mật khẩu sai");
        }
      })
      .catch(function (error) {
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
