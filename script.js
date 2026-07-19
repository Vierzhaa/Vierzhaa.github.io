const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", (e) => {
  dropdownMenu.classList.toggle("show");
  e.stopPropagation();
});

dropdownMenu.addEventListener("click", () => {
  dropdownMenu.classList.remove("show");
});

window.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
  }
});

const savedName = localStorage.getItem("userName");

const sayhi = document.getElementById("sayhi");

if (savedName) {
  sayhi.innerText = `Hi, ${savedName}`;
  sayhi.dataset.content = `Hi, ${savedName}`;
} else {
  sayhi.innerText = "Hi, stranger";
  sayhi.dataset.content = "Hi, stranger";
}

function logout() {
  localStorage.removeItem("userName");
  window.location.href = "index.html";
}
