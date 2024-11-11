// Lay ten dang nhap
const userName = localStorage.getItem("userName");

function getUserNameFromLogin() {
  let nameAccount = document.querySelector(".account");
  nameAccount.innerText = userName;
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

// Click home in sidebar
function homePage() {
  let btnActive = document.querySelector(".sb-home");

  btnActive.onclick = function () {
    // Thao tác chuyển Focus trên thanh sidebar sang 1 trang khác
    let pageFocusing = document.querySelector(".page-focus");
    pageFocusing.classList.remove("page-focus");
    btnActive.classList.add("page-focus");

    // Thao tác hiển thị lên trang khác
    document.getElementById("home-content").classList.remove("hide-form");
    document.getElementById("search-content").classList.add("hide-form");
    document.getElementById("import-content").classList.add("hide-form");
    document.getElementById("export-content").classList.add("hide-form");
    document.getElementById("receipt-content").classList.add("hide-form");
    document.getElementById("report-content").classList.add("hide-form");
    document.getElementById("settings-content").classList.add("hide-form");
  };
}

// Click search in sidebar
function searchPage() {
  let btnActive = document.querySelector(".sb-search");

  btnActive.onclick = function () {
    // Thao tác chuyển Focus trên thanh sidebar sang 1 trang khác
    let pageFocusing = document.querySelector(".page-focus");
    pageFocusing.classList.remove("page-focus");
    btnActive.classList.add("page-focus");

    // Thao tác hiển thị lên trang khác
    document.getElementById("search-content").classList.remove("hide-form");
    document.getElementById("home-content").classList.add("hide-form");
    document.getElementById("import-content").classList.add("hide-form");
    document.getElementById("export-content").classList.add("hide-form");
    document.getElementById("receipt-content").classList.add("hide-form");
    document.getElementById("report-content").classList.add("hide-form");
    document.getElementById("settings-content").classList.add("hide-form");
  };
}

// Click import in sidebar
function importPage() {
  let btnActive = document.querySelector(".sb-import");

  btnActive.onclick = function () {
    // Thao tác chuyển Focus trên thanh sidebar sang 1 trang khác
    let pageFocusing = document.querySelector(".page-focus");
    pageFocusing.classList.remove("page-focus");
    btnActive.classList.add("page-focus");

    // Thao tác hiển thị lên trang khác
    document.getElementById("import-content").classList.remove("hide-form");
    document.getElementById("search-content").classList.add("hide-form");
    document.getElementById("home-content").classList.add("hide-form");
    document.getElementById("export-content").classList.add("hide-form");
    document.getElementById("receipt-content").classList.add("hide-form");
    document.getElementById("report-content").classList.add("hide-form");
    document.getElementById("settings-content").classList.add("hide-form");
  };
}

// Click export in sidebar
function exportPage() {
  let btnActive = document.querySelector(".sb-export");

  btnActive.onclick = function () {
    // Thao tác chuyển Focus trên thanh sidebar sang 1 trang khác
    let pageFocusing = document.querySelector(".page-focus");
    pageFocusing.classList.remove("page-focus");
    btnActive.classList.add("page-focus");

    // Thao tác hiển thị lên trang khác
    document.getElementById("export-content").classList.remove("hide-form");
    document.getElementById("search-content").classList.add("hide-form");
    document.getElementById("import-content").classList.add("hide-form");
    document.getElementById("home-content").classList.add("hide-form");
    document.getElementById("receipt-content").classList.add("hide-form");
    document.getElementById("report-content").classList.add("hide-form");
    document.getElementById("settings-content").classList.add("hide-form");
  };
}

// Click receipt in sidebar
function receiptPage() {
  let btnActive = document.querySelector(".sb-receipt");

  btnActive.onclick = function () {
    // Thao tác chuyển Focus trên thanh sidebar sang 1 trang khác
    let pageFocusing = document.querySelector(".page-focus");
    pageFocusing.classList.remove("page-focus");
    btnActive.classList.add("page-focus");

    // Thao tác hiển thị lên trang khác
    document.getElementById("receipt-content").classList.remove("hide-form");
    document.getElementById("search-content").classList.add("hide-form");
    document.getElementById("import-content").classList.add("hide-form");
    document.getElementById("export-content").classList.add("hide-form");
    document.getElementById("home-content").classList.add("hide-form");
    document.getElementById("report-content").classList.add("hide-form");
    document.getElementById("settings-content").classList.add("hide-form");
  };
}

// Click report in sidebar
function reportPage() {
  let btnActive = document.querySelector(".sb-report");

  btnActive.onclick = function () {
    // Thao tác chuyển Focus trên thanh sidebar sang 1 trang khác
    let pageFocusing = document.querySelector(".page-focus");
    pageFocusing.classList.remove("page-focus");
    btnActive.classList.add("page-focus");

    // Thao tác hiển thị lên trang khác
    document.getElementById("report-content").classList.remove("hide-form");
    document.getElementById("search-content").classList.add("hide-form");
    document.getElementById("import-content").classList.add("hide-form");
    document.getElementById("export-content").classList.add("hide-form");
    document.getElementById("receipt-content").classList.add("hide-form");
    document.getElementById("home-content").classList.add("hide-form");
    document.getElementById("settings-content").classList.add("hide-form");
  };
}

// Click settings in sidebar
function settingsPage() {
  let btnActive = document.querySelector(".sb-settings");

  btnActive.onclick = function () {
    // Thao tác chuyển Focus trên thanh sidebar sang 1 trang khác
    let pageFocusing = document.querySelector(".page-focus");
    pageFocusing.classList.remove("page-focus");
    btnActive.classList.add("page-focus");

    // Thao tác hiển thị lên trang khác
    document.getElementById("settings-content").classList.remove("hide-form");
    document.getElementById("search-content").classList.add("hide-form");
    document.getElementById("import-content").classList.add("hide-form");
    document.getElementById("export-content").classList.add("hide-form");
    document.getElementById("receipt-content").classList.add("hide-form");
    document.getElementById("report-content").classList.add("hide-form");
    document.getElementById("home-content").classList.add("hide-form");
  };
}

// main
getUserNameFromLogin();
logoutButton();
homePage();
searchPage();
importPage();
exportPage();
receiptPage();
reportPage();
settingsPage();
