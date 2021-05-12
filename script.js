document.getElementById('calculate').addEventListener('click', calculateButton)

let firstNum = 0
let secondNum = 0
let result = 0

function calculateButton () {
  firstNum = document.getElementById('first').value
  firstNum = parseInt(firstNum)
  secondNum = document.getElementById('second').value
  secondNum = parseInt(secondNum)
  result = parseInt(result)

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
  }
  document.getElementById('answer').innerHTML = result
  result = 0
}
