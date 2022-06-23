
// milestone 4//
const FB_URL = "http://localhost:5050/fibonacci/";
const button = document.getElementById("submit");
const output = document.getElementById("outputN");
const input = document.getElementById("inputN");
const spinnerOn = document.getElementById("spinner");
 //---in html-+ out to server 

button.addEventListener("click", (outToServer));

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
          });
        } })
  }      
else if (sendInfo > 50) {
      output.innerHTML = "Can’t be larger than 50" , spinnerOn.classList.add('d-none');
    }
}
