const title = document.getElementById("title");
const spell = document.getElementById("spell");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const screenTxt = document.getElementById("screen");

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
