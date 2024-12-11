function calculator(a, b) {

    a = 10;
    b = "P";


    if (typeof a === "number" && typeof b === "number") {
    
    var calculate = "+"; //+ - * /


    let sum;
    if (calculate === "+") {
        sum = a + b;
        console.log(`Result of ${a} + ${b}: ${sum}`);
    } else if (calculate === "-") {
        sum = a - b;
        console.log(`Result of ${a} - ${b}: ${sum}`);
    } else if (calculate === "*") {
        sum = a * b;
        console.log(`Result of ${a} * ${b}: ${sum}`);
    } else if (calculate === "/") {
        if (b === 0) {
        console.log("Division by zero is not allowed.");
    } else {
        sum = a / b;
        console.log(`Result of ${a} / ${b}: ${sum}`);
        }
    } else {
        console.log("Invalid operation.");
    }
    } else {
    console.log("Input valid numbers.");
    }
}

  // Call the calculator function with predefined values
calculator();
