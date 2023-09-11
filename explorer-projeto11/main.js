const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

function toggleScreen() {
  document.querySelector(".screen1").classList.toggle("hide");
  document.querySelector(".screen2").classList.toggle("hide");
}

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    
    document.querySelector(
        ".screen2 h2"
        ).innerText = `acertou em ${xAttempts} tentativas`;
    }
    
  xAttempts++;
  inputNumber.value = "";

  console.log(randomNumber);
  console.log(xAttempts);
}

function handleResetClick() {
  toggleScreen();

  xAttempts++;
  console.log(randomNumber);
  console.log(xAttempts);
}

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
