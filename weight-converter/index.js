const inputE1 = document.getElementById("input");
const errorE1 = document.getElementById("error");
const resultE1 = document.getElementById("result");

let errorTime;
let resultTime;


function updateResults() {
    // console.log("Change");

    if (inputE1.value <= 0 || isNaN(inputE1.value)) {
        errorE1.innerText = "Please enter a valid number";
        resultE1.innerText = "";
        clearTimeout(errorTime);
        errorTime = setInterval(()=>{
            errorE1.innerText = "";
            inputE1.value = "";
            resultE1.innerText = "";
        }, 2000)
    } else {        
        resultE1.innerText = (+inputE1.value * 0.453592).toFixed(2);

        clearTimeout(resultTime);
        resultTime = setInterval(()=>{
            inputE1.innerText = "";
            resultE1.value = "";
        }, 10000);
    }

}


inputE1.addEventListener("input", updateResults)