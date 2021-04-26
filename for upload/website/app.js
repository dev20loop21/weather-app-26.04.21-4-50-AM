//global variables
const apiKey = "aa37668a34d26cc94878185f0092556d";

const apiUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";

const zipCodeElement = 
document.getElementById("zip");

const feelingsCodeElement = 
document.getElementById("feelings");

const dateElement = 
document.getElementById("date");

const tempElement = 
document.getElementById("temp");

const contentElement = 
document.getElementById("content");

const catchError = (error)=> console
.error("some Error Has Been =>", error);

//EventListener
document.getElementById("generate").
addEventListener("click",buttonProcess);

//callback for processing user inputs and getting corresponding info 
function buttonProcess (){
    let data = {
        temp: 0,
        content: feelingsCodeElement.value,
        date: new Date(),
      };

    getZipCodeInformation()
    .then((info) => (data.temp = info.main.temp))
    .then(() => sendUserInputs(data))
    .catch(catchError);

//Create asynchronous function to send user inputs to the server    
async function sendUserInputs(data){
        let output = await fetch(`
        /postData`,{ method:'POST',
        headers: {'content-type':
        'application/json'},
        body: JSON.stringify(data),
        });
        try {
            output.json().then(data =>{
                if (output.ok)
                updateUI();
                else{alert 
                ('process Not Successfuly')};
            }).catchError(error);
        } catch (error) {
            catchError (error);
        }
    }
    
async function getZipCodeInformation() {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipCodeElement.value}&appid=${apiKey}`
    );
    const info = await res.json();
    return info;
  }



//Update user interface without reloading the webpage
async function updateUI (){
    let output = await fetch (
        `/getAll`);
        try {
            output.json().then(
                data=> {
                dateElement.innerHTML=
                `The date is: ${data.date}`;
                tempElement.innerHTML=
                `Your corresponding Temprature is: ${data.temp}`;
                contentElement.innerHTML=
                `Your feelings are: ${data.content}`;    
                }).catch(catchError);
        } catch (error){
            catchError(error)
        }
}};
