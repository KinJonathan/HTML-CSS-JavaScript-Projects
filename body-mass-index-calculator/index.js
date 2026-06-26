const btnE1 = document.getElementById("btn");

btnE1.addEventListener("click", ()=>{
    computeBMI();
})


function computeBMI() {
    const heightValue = document.getElementById("height").value/100;
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue / (heightValue * heightValue);

    document.getElementById("bmi-result").value = bmiValue;

    if (bmiValue < 18.5) {
        document.getElementById("weight-condition").innerText = "Under weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        document.getElementById("weight-condition").innerText = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9){
        document.getElementById("weight-condition").innerText = "Over weight";
    } else if (bmiValue >= 30) {
        document.getElementById("weight-condition").innerText = "Obesity";
    }
    // console.log(heightValue, weightValue);
}