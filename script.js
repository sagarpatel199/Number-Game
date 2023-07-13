const randomNum = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userInput = parseInt(document.getElementById('userInput').value);
  const result = document.getElementById('result');

  if (userInput === randomNum) {
    result.style.color = 'green';
    result.textContent = 'Congratulations! You guessed the correct number!';
  } else if (userInput < randomNum) {
    result.style.color = 'red';
    result.textContent = 'Too low. Try again.';
  } else {
    result.style.color = 'red';
    result.textContent = 'Too high. Try again.';
  }
}
