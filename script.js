let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ;:";
let rdnCharacters = "";
let charArray = [];
let keys = document.getElementsByClassName("keys");
let main_display = document.getElementById("main-display");
let input_text = document.getElementById("input-text");
let declare = document.getElementById("declare");
let correct_word = document.getElementById("correct-word");
let miss_word = document.getElementById("missed-word");
let wpm = document.getElementById("wpm");
let text_length = 5;
let typedChar;
let start;

//generate random texts
function generateNAddTexts() {
  for (let index = 0; index < text_length; index++) {
    var indexx = Math.floor(Math.random() * characters.length);
    var value = characters.charAt(indexx).toLowerCase();
    rdnCharacters += value;
  }
  main_display.innerText += rdnCharacters;
}

window.addEventListener("keypress", (e) => {
  if ((e.key >= "a" && e.key <= "z") || e.key === ";" || e.key === ":") {
    typedChar = e.key;
    input_text.innerText += typedChar;
    if (!start) {
        start = Date.now();
      }
  }
  
  for (let index = 0; index < characters.length; index++) {
    keys[index].style.backgroundColor = "";
    if (typedChar === keys[index].innerText) {
      keys[index].style.backgroundColor = "black";
    }
  }
  if (input_text.innerText.length == rdnCharacters.length) {
    let end = Date.now();
    let timeElapsed = (end - start) / 1000; // in seconds
    let typingSpeed = Math.round(text_length / 5 / (timeElapsed / 60)); // words per minute
    if (input_text.innerText === rdnCharacters) {
      setDefault();
      generateNAddTexts();
      declare.innerText = "Correct !";
      correct_word.innerText++;
    } else {
      setDefault();
      generateNAddTexts();
      declare.innerText = "TypeAgain !";
      miss_word.innerText++;
    }
    start = null;
    wpm.innerHTML = typingSpeed;
  }
});

function calWpm() {
  let wpmm = input_text.innerText / 5 / 60;
}
function setDefault() {
  main_display.innerText = "";
  rdnCharacters = "";
  input_text.innerText = "";
  wpm.innerText = "";
  for (let index = 0; index < characters.length; index++) {
    keys[index].style.backgroundColor = "";
  }
}

generateNAddTexts();
