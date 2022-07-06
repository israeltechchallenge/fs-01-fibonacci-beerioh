
// milestone 3// ------------
//const accurateXandY(x) = document.querySelector(".Fibonacci");
//const spinner = document.querySelector(".spinner");
//fibonacciText = document.getElementById('Fibonacci');
const button = document.getElementById("submit");
const output = document.getElementById("outputN");

  
button.addEventListener("click", fResults);

function fResults() { 
    const input = document.getElementById("inputN").value;
    const result = caculateXandY(input);
    output.innerText = result;
}
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


// Instead of hardcoding Y (the result of the Fibonacci of X), calculate it with a for loop// The calculation should be wrapped in a function which gets X as an argument and returns Y// After the function, you should call the function, and assign the returned value in your HTML to present to the user