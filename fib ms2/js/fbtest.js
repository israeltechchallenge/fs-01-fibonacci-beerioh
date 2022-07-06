// milestone 2
// ------------
//let fibonacciText = document.getElementById('Fibonacci');

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

//fibonacciText = `The Fibonacci of ${caculateXandY(x)} is ${x}}`;
//document.getElementById('Fibonacci').innerText = fibonacciText;

//caculateXandY(15);



//console.log(caculateXandY(8));
// Instead of hardcoding Y (the result of the Fibonacci of X), calculate it with a for loop
// The calculation should be wrapped in a function which gets X as an argument and returns Y
// After the function, you should call the function, and assign the returned value in your HTML to pres