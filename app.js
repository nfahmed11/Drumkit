// function for which key was pressed down

document.addEventListener("keydown", function (e) {
  const eCode = e.code;
  const audio = document.querySelector(`audio[code=${eCode}]`);
  const div = document.querySelector(`div[code=${eCode}]`);

  div.classList.add("clicked");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  div.addEventListener("transitionend", () => {
    div.classList.remove("clicked");
  });
});
