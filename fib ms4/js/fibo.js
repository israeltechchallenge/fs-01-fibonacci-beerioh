
// milestone 4//
const FB_URL = "http://localhost:5050/fibonacci/";

const button = document.getElementById("submit");
const output = document.getElementById("outputN");
const input = document.getElementById("inputN");

 //---in html-+ out to server 
button.addEventListener("click", outToServer);


function outToServer () { 
   const sendInfo = input.value;
  fetch(`${FB_URL}${sendInfo}`)
      .then(function (response) {
          JSON.stringify(response)
          return response.json()
          
      .then(data => output.innerHTML = data['result']);
            
        })
}
function clickImageFunc() {
  document.getElementById('profile-image').classList.add('fadeIn');
}
