console.log("connected");

// function for which key was pressed down
document.addEventListener("keydown", function (e) {
  const eCode = e.code;
  const audio = document.querySelector(`audio[code=${eCode}]`);
  audio.play();
  console.log(audio);
});
