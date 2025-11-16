function calculateBMI(){
    
    makeTagInvisible();

    let height = document.getElementById("height").value;

    if(!parseFloat(height) || height <= 0 || isNaN(height)){
        alert("Type a valid number!!");
        document.getElementById("result").style.display = "none";
        changeBackgroundColor(0);
        clearFields();
        return;
    }
    
    let weight = document.getElementById("weight").value;

    if(!parseFloat(weight) || weight <= 0 || isNaN(weight)){
        alert("Type a valid value!!");
        document.getElementById("result").style.display = "none";
        changeBackgroundColor(0);
        clearFields();
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    document.getElementById("result").textContent = `Your BMI is: ${bmi}!!`;
    document.getElementById("result").style.display = "block";
    
    
    if(bmi < 18.5){
        document.getElementById("title").style.display = "block";
        document.getElementById("msg1").style.display = "block";
        changeBackgroundColor(1);
    } else if(bmi >= 18.5 && bmi < 25){
        document.getElementById("title").style.display = "block";
        document.getElementById("msg2").style.display = "block";
        changeBackgroundColor(2);
    } else if(bmi >= 25 && bmi < 30){
        document.getElementById("title").style.display = "block";
        document.getElementById("msg3").style.display = "block";
        changeBackgroundColor(3);
    } else {
        document.getElementById("title").style.display = "block";
        document.getElementById("msg4").style.display = "block";
        changeBackgroundColor(4);
    }


}

function makeTagInvisible(){
    document.getElementById("result").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("msg1").style.display = "none";
    document.getElementById("msg2").style.display = "none";
    document.getElementById("msg3").style.display = "none";
    document.getElementById("msg4").style.display = "none"; 
}

function clearFields(){
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    makeTagInvisible();
}

function changeBackgroundColor(idColor){
    if(idColor === 1){
        document.getElementById("changeColor").style.backgroundColor = "rgba(172, 34, 34, 1)";
    } else if(idColor === 2){
        document.getElementById("changeColor").style.backgroundColor = "rgba(49, 172, 70, 1)";
    } else if(idColor === 3){
        document.getElementById("changeColor").style.backgroundColor = "rgba(211, 162, 55, 1)";
    } else if(idColor === 4){ 
        document.getElementById("changeColor").style.backgroundColor = "rgba(199, 28, 28, 1)";
    } else {
        document.getElementById("changeColor").style.backgroundColor = "black";
    }
}