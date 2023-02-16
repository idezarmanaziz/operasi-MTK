const dataInput = document.querySelector("[data-input]");
const dataPreviousOperand = document.querySelector("[data-previous-operand]");
const dataCurrentOperand = document.querySelector("[data-current-operand]");
const dataAllClear = document.querySelector("[data-all-clear]");
const dataDelete = document.querySelector("[data-delete]");
const dataOperations = document.querySelectorAll("[data-operation]");
const dataSubmit = document.querySelector("[data-submit]");

class Calculator {
  constructor(input, previousOperand, currentOperand) {
    this.input = input;
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.numbers = [];
  }

  addNumber(number) {
    this.numbers.push(number);
  }

  getValues() {
    const inputValue = this.input.value;
    if (inputValue === "") {
      return alert("Please enter a valid number and input can't be empty");
    }
    this.addNumber(inputValue);
    this.previousOperand.textContent = this.numbers;
  }

  mean() {
    if (this.numbers.length === 0) {
      return alert("Please enter a valid number and input can't be empty");
    }
    const mean = math.mean(this.numbers);
    this.currentOperand.textContent = mean;
    this.clear();
  }

  median() {
    if (this.numbers.length === 0) {
      return alert("Please enter a valid number and input can't be empty");
    }
    const median = math.median(this.numbers);
    this.currentOperand.textContent = median;
    this.clear();
  }

  mode() {
    if (this.numbers.length === 0) {
      return alert("Please enter a valid number and input can't be empty");
    }
    const mode = math.mode(this.numbers);
    this.currentOperand.textContent = mode;
    this.clear();
  }
  
  std() {
    if (this.numbers.length === 0) {
      return alert("Please enter a valid number and input can't be empty");
    }
    const std = math.std(this.numbers);
    this.currentOperand.textContent = std.toFixed(2);
    this.clear();
  }

  clear() {
    this.input.value = "";
    this.numbers = [];
  }

  clearAll() {
    this.clear();
    this.currentOperand.textContent = "";
    this.previousOperand.textContent = "";
  }

  delete() {
    this.numbers.pop();
    this.previousOperand.textContent = this.numbers;
  }
}

const calculator = new Calculator(dataInput, dataPreviousOperand, dataCurrentOperand);

dataInput.addEventListener("keyup", (e) => {
  e.keyCode === 13 ? calculator.getValues() : false
});


dataSubmit.addEventListener("click", () => {
  calculator.getValues();
});

dataAllClear.addEventListener("click", () => {
  calculator.clearAll();
});

dataDelete.addEventListener("click", () => {
  calculator.delete();
});

dataOperations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    calculator[e.target.textContent.toLowerCase()]();
  });
});
