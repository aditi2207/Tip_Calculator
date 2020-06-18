function calculateTip(){
    let amt = document.getElementById("amount").value;
    let quality = document.getElementById("service").value; 
    let ppl = document.getElementById("people").value;
    
    if(amt === "" || quality == 0){
        alert("Please enter valid information");
        return;
    }

    if(ppl === "" || ppl <= 1){
        ppl = 1;
        document.getElementById("each").style.display = "none";
    }
    else{
        document.getElementById("each").style.display = "block";
    }

    let total = (amt * quality)/ ppl;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("totaltip").style.display="block";
    document.getElementById("tip").innerHTML=total;
}

document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calc").onclick = () => calculateTip();