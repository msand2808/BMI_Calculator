function calculateBMI(){
    let height = document.getElementById("height").value;

    if(!parseFloat(height)){
        alert("Write a valid number")
        return;
    }
    
    let weight = document.getElementById("weight").value;

    console.log(weight);

    document.getElementById("msg").style.display = "block";
    
}