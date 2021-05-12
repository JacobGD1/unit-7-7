document.getElementById('calculate').addEventListener('click', calculateButton)
// connects calculate button
let firstNum = 0
let secondNum = 0
let result = 0
// sets variables for the code
function calculateButton () {
  firstNum = document.getElementById('first').value
  firstNum = parseInt(firstNum)
  secondNum = document.getElementById('second').value
  secondNum = parseInt(secondNum)
  result = parseInt(result)
  // sets the calculate button for the first and second value
  if (firstNum >= 0 && secondNum >= 0) {
    for (let i = 0; i < firstNum; i++) {
      result = result + secondNum
    }
  } else if (firstNum < 0 && secondNum < 0) {
    for (let i = 0; i > firstNum; i--) {
      result = result - secondNum
    }
  } else if (firstNum < 0 && secondNum >= 0) {
    for (let i = 0; i > firstNum; i--) {
      result = result - secondNum
    }
  } else if (firstNum >= 0 && secondNum < 0) {
    for (let i = 0; i > secondNum; i--) {
      result = result - firstNum
    }
  } // allows the code to multiply integers using addition
  document.getElementById('answer').innerHTML = result
  result = 0
}
