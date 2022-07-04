
// milestone 7//
const FB_URL_Line = "http://localhost:5050/getFibonacciResults";
const FB_URL = "http://localhost:5050/fibonacci/";
const button = document.getElementById("submit");
const output = document.getElementById("outputN");
const input = document.getElementById("inputN");
const spinnerOn = document.getElementById("spinner");
const spinnerOn2 = document.getElementById("spinner2");
let serverLine = document.getElementById("serverOutput");
const checkbox = document.querySelector("input[name=checkbox]");
const functionOn = document.getElementById("functionOn")
let dataResult = [];

let serverInfo = "";
button.addEventListener("click", (outToServer));


// checkbox.addEventListener('change', e => {

//    if ( HANDLER_IS_SET )
//         outToServer2.unbind( "click");    
//     else       
//        outToServer2.bind( "click", myEventHandlerFunction ); 
// });

window.onload = outToServer2();
// אינפורמציה פץ ראשון
function outToServer() {
  spinnerOn.classList.remove('d-none')
  const sendInfo = input.value;
 
  if (sendInfo < 51) {
    fetch(`${FB_URL}${sendInfo}`)
      .then(response => {
        if (!response.ok) {
          response.text().then((data) => {
            spinnerOn.classList.add('d-none');
            output.innerHTML = `Server Error: ${data}`;
          });
         
        }
        else {
          response.json()
            .then((data) => {
              output.innerHTML = data['result'],
                spinnerOn.classList.add('d-none')
              outToServer2()
            }); } })  }
  else if (sendInfo > 50) {
    output.innerHTML = "Can’t be larger than 50",
      spinnerOn.classList.add('d-none');
      
    outToServer2()
  }// תוצאות עבר - פץ סרבר
}


function outToServer2() {
  let clear = document.getElementById("serverOutput");
      clear.innerHTML = "";
  spinnerOn2.classList.remove('d-none')
  fetch(FB_URL_Line)
    .then(response => response.json())
    .then(data => {
      dataResult = data.results;
      
      const sortedAsc = dataResult.sort(
      (objA, objB) => Number(objB.createdDate) - Number(objA.createdDate),
);
      const size = 10
      const items = dataResult.slice(0, size)
      console.log(items);
          console.log(items);
          let serverLine = document.getElementById("serverOutput");
          serverLine.innerHTML = "";
          for (let result of items) {
            let elm = document.createElement("div");
            let date = new Date(result.createdDate);
            elm.innerHTML = `<span><u> The Fibonacci of <strong>${result.number}</strong> Is <strong>${result.result}</strong>. Caculated at: ${date} </u> </span>`;
            serverLine.appendChild(elm);
            spinnerOn2.classList.add('d-none')
          }
      })
}
