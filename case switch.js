function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return "Invalid operator";
    }
    return result;
  }
  console.log(calculator(5, 10, "+")); // Output: 15
