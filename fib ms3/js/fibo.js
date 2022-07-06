// milestone 1// ------------let fibonacciText = document.getElementById('Fibonacci');
// let x = 7;// let y = 13;
// fibonacciText = `The Fibonacci of ${x} is ${y}`;
//document.getElementById('Fibonacci').innerText = fibonacciText;
// 






// milestone 2// ------------

fibonacciText = document.getElementById('Fibonacci');


function caculateXandY(x) {
    if (x <= 1) {
        return x;
    }
    const y = [0, 1];
    for (let i = 2; i <= x; i++) {
        y[i] = y[i - 2] + y[i - 1];
    }
    return y[y.length - 1];
}
let x=40

fibonacciText.innerText = `The Fibonacci of ${x} is ${caculateXandY(x)}`;

//const x = document.getElementById('Fibonacci').value;
// console.log(caculateXandY(8));// Instead of hardcoding Y (the result of the Fibonacci of X), calculate it with a for loop// The calculation should be wrapped in a function which gets X as an argument and returns Y// After the function, you should call the function, and assign the returned value in your HTML to present to the user