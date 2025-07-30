const display = document.getElementById("display");
let memory = 0;

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Memory Functions
function memoryAdd() {
  try {
    const currentValue = parseFloat(eval(display.value));
    if (!isNaN(currentValue)) {
      memory += currentValue;
    }
  } catch {
    display.value = "Error";
  }
}

function memorySubtract() {
  try {
    const currentValue = parseFloat(eval(display.value));
    if (!isNaN(currentValue)) {
      memory -= currentValue;
    }
  } catch {
    display.value = "Error";
  }
}

function memoryRecall() {
  display.value = memory.toString();
}

function memoryClear() {
  memory = 0;
}