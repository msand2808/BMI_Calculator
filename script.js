function calculateBMI(){

    makeTagInvisible();

    let height = document.getElementById("height").value;

    if(!parseFloat(height) || height <= 0){
        alert("Type a valid number!!");
        document.getElementById("result").style.display = "none";
        return;
    }
    
    let weight = document.getElementById("weight").value;

    if(!parseFloat(weight) || weight <= 0){
        alert("Type a valid value!!");
        document.getElementById("result").style.display = "none";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    document.getElementById("result").textContent = `Your BMI is: ${bmi}!!`;
    document.getElementById("result").style.display = "block";
    
    
    if(bmi < 18.5){
        document.getElementById("title").style.display = "block";
        document.getElementById("msg1").style.display = "block";
    } else if(bmi >= 18.5 && bmi < 24.9){
        document.getElementById("title").style.display = "block";
        document.getElementById("msg2").style.display = "block";
    } else if(bmi >= 25 && bmi < 29.9){
        document.getElementById("title").style.display = "block";
        document.getElementById("msg3").style.display = "block";
    } else {
        document.getElementById("title").style.display = "block";
        document.getElementById("msg4").style.display = "block";
    }
}

function makeTagInvisible(){
    console.log("Making tags invisible...");
    document.getElementById("result").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("msg1").style.display = "none";
    document.getElementById("msg2").style.display = "none";
    document.getElementById("msg3").style.display = "none";
    document.getElementById("msg4").style.display = "none"; 
}