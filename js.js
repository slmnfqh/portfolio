// toggle kelas active
const Header = document.querySelector(".header");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  Header.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
const close = document.querySelector("#close");
// klik utk menghilangkan sidebar nya
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target)) {
    Header.classList.remove("active");
  } else if (close.contains(e.target)) {
    Header.classList.remove("active");
  } else if (!header.contains(e.target)) {
    Header.classList.remove("active");
  }
});

// animation keyword
const specialist = document.getElementById("specialist");
let count = 0;

setInterval(() => {
  if (count == 0) {
    specialist.innerText = `Web Developer`;
    count++;
  } else if (count == 1) {
    specialist.innerText = `Web Designer`;
    count++;
  } else if (count == 2) {
    specialist.innerText = `Mahasiswa Aktif`;
    count++;
  } else if (count == 3) {
    count = 0;
  }
}, 1000);
