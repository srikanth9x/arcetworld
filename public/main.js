const title = document.getElementById("title");
const spell = document.getElementById("spell");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const screenTxt = document.getElementById("screen");
const discord = document.getElementById("discord");
const instagram = document.getElementById("instagram");
const x = document.getElementById("x");
const youtube = document.getElementById("youtube");
const github = document.getElementById("github");
const mail = document.getElementById("mail");

title.addEventListener("click", () => {
  spell.play();
});

noBtn.addEventListener("click", () => {
  screenTxt.innerHTML = "That’s okay. <br> If you change your mind, you can always try again.";
});

yesBtn.addEventListener("click",() => {
  screenTxt.innerHTML = "Nice. <br> You’re early. <br> Let’s understand why do you want to build games?"
  setTimeout(() => {
    window.location.href = "https://forms.gle/QDHCkXPj2ZTrscSw6"
  }, 1200);
});

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
