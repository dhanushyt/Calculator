let outputScreen = document.getElementById("output-screen");

function display(num) {
  outputScreen.value += num;
}

function Clear() {
  outputScreen.value = "";
}

function calculator() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid");
  }
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
