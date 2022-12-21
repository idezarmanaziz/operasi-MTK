const operationsButton = document.querySelectorAll("[data-operation]");
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");
const currentOperand1 = document.querySelector("[data-current-operand-1]");
const allClearBtn = document.querySelector("[data-all-clear]");
const submitBtn = document.querySelector("[data-submit]");
const deleteBtn = document.querySelector("[data-delete]");

const a = [];


class Exec {
    constructor(previousOperand, currentOperand, currentOperand1) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.currentOperand1 = currentOperand1;
    }

    resultConvert() {
        const result = (this.currentOperand.textContent = this.convertNumber(a));
        return result;
    }

    convertNumber(value) {
        const convert = value.map((a) => parseFloat(a));
        return convert;
    }

    validasiInput() {
        if (this.previousOperand.value === "") {
            return alert("Invalid input. Please enter a valid number and input can't be empty.");
        }
        a.push(this.previousOperand.value);
        this.resultConvert(a);
    }

    mean() {
        if (this.currentOperand === "NaN" || a.length === 0 || this.currentOperand === "") {
            return alert("Invalid input. Please enter a valid number or add numbers to the array.");
        } else {
            const mean = (this.currentOperand1.textContent = math.mean(this.resultConvert()));
            this.clear1();
            return mean;
        }
    }

    median() {
        if (this.currentOperand === "NaN" || a.length === 0 || this.currentOperand === "") {
            return alert("Invalid input. Please enter a valid number or add numbers to the array.");
        } else {
            const median = (this.currentOperand1.textContent = math.median(this.resultConvert()));
            this.clear1();
            return median;
        }
    }

    mode() {
        if (this.currentOperand === "NaN" || a.length === 0 || this.currentOperand === "") {
            return alert("Invalid input. Please enter a valid number or add numbers to the array.");
        } else {
            const mode = (this.currentOperand1.textContent = math.mode(this.resultConvert()));
            this.clear1();
            return mode;
        }
    }

    std() {
        if (this.currentOperand === "NaN" || a.length === 0 || this.currentOperand === "") {
            return alert("Invalid input. Please enter a valid number or add numbers to the array.");
        } else {
            const std = (this.currentOperand1.textContent = math.std(this.resultConvert()));
            this.clear1();
            return std;
        }
    }

    clear1() {
        this.previousOperand.value = "";
        this.currentOperand.textContent = "";
        this.previousOperand.textContent = "";
        return this.reset();
    }

    clear() {
        this.previousOperand.value = "";
        this.currentOperand.textContent = "";
        this.currentOperand1.textContent = "";
        this.previousOperand.textContent = "";
        return this.reset();
    }

    reset() {
        a.splice(0, a.length);
    }

    delete() {
        a.pop();
        this.currentOperand.textContent = a;
    }
}

const exec = new Exec(previousOperand, currentOperand, currentOperand1);



previousOperand.addEventListener("keyup", (e) => {
    const unicode = e.keyCode;
    if (unicode == 13) {
        exec.validasiInput();
    } else if (unicode == 77) {
        exec.mean();
    } else if (unicode == 78) {
        exec.median()
    } else if (unicode == 66) {
        exec.mode()
    }
});

allClearBtn.addEventListener("click", () => {
    return exec.clear();
});

deleteBtn.addEventListener("click", () => {
    return exec.delete();
});

submitBtn.addEventListener("click", () => {
    return exec.validasiInput()
});

operationsButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.target.classList;
        if (styles.contains("mean")) {
            exec.mean();
        } else if (styles.contains("median")) {
            exec.median();
        } else if (styles.contains("modus")) {
            exec.mode();
        } else {
            exec.std();
        }
    });
});