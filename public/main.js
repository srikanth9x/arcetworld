const logo = document.getElementById("logo");
const spell = document.getElementById("spell");
const screenTxt = document.getElementById("screen");
const discord = document.getElementById("discord");
const instagram = document.getElementById("instagram");
const x = document.getElementById("x");
const youtube = document.getElementById("youtube");
const github = document.getElementById("github");
const mail = document.getElementById("mail");

logo.addEventListener("click", () => {
  spell.play();
});

function no() {
  screenTxt.innerHTML = "That’s okay. <br> If you change your mind, you can always try again.";
  btns.style.display = "none";
}

function yes() {
  screenTxt.innerHTML = "Nice. <br> You’re early. <br> Let’s understand why do you want to build games?";
  btns.style.display = "none";
  setTimeout(() => {
    window.location.href = "https://forms.gle/QDHCkXPj2ZTrscSw6"
  }, 1200);
}

function home() {
  window.location.href = "index.html"
}

discord.addEventListener("click", () => {
  window.location.href = "https://discord.com/users/1453759433716011039/"
});

instagram.addEventListener("click", () => {
  window.location.href = "https://instagram.com/arcetworld/"
});

x.addEventListener("click", () => {
  window.location.href = "https://x.com/arcetworld/"
});

youtube.addEventListener("click", () => {
  window.location.href = "https://youtube.com/@arcetworld/"
});

github.addEventListener("click", () => {
  window.location.href = "https://github.com/arcetworld/"
});

mail.addEventListener("click", () => {
  window.location.href = "mailto:arcet.web.app@gmail.com"
});
