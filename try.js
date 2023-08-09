function solve() {
    let num1 = document .getElementById("numb1").value;
    let num2 = document .getElementById("numb2").value;
    let result = document .getElementById("result").value;
    let operators = document .getElementById("operators").value;

    if (operators === "addition") {
        document.getElementById("result").value = num1 + num2;
    }
}



