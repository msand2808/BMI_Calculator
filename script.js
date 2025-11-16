function calculateBMI(){

    makeTagInvisible();

    let height = document.getElementById("height").value;

    if(!parseFloat(height)){
        alert("Type a valid number!!");
        document.getElementById("result").style.display = "none";
        return;
    }
    
    let weight = document.getElementById("weight").value;

    if(!parseFloat(weight)){
        alert("Type a valid value!!");
        document.getElementById("result").style.display = "none";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    
    document.getElementById("result").textContent = `Your BMI is: ${bmi}`;
    document.getElementById("result").style.display = "block";
}

function makeTagInvisible(){
    //document.getElementById("msg").style.display = "none";
}