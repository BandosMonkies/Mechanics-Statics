function Compute() {
    let height = parseFloat(document.getElementById("h-height").value);
    let resultBox = document.getElementById("result");
    let output = "";

    if (!isNaN(height) && (height>=1750 || height<=-375) ) {    // When smaller rectangle is out of the bigger rectangle
        let ans= 1.250*(1.750**3)/3;
        output+="MOI about the x-axis = "+ ans.toFixed(4) + " m⁴\n";
        output+="The smaller rectangle is out of the bigger rectangle.\n";
        resultBox.style.display = "block";
        resultBox.innerText = output;
        resultBox.style.color = "white";
    }

    else if(!isNaN(height) && height>=0 && height<=1375){     // When smaller rectangle is completely inside the bigger rectangle
        height = height / 1000;     // Convert to meters
        let term1 = 1.250*(1.750**3)/3;
        let term2 = 3.2958*(10**-3);
        let term3 = (0.28125)*(height+0.187)**2;
        let ans = term1 - (term2 + term3);
        output+="MOI about the x-axis = "+ ans.toFixed(4) + " m⁴\n";
        resultBox.style.display = "block";
        resultBox.innerText = output;
        resultBox.style.color = "white";
    }

    else if(!isNaN(height) && (height>=0)){                   // When smaller rectangle is partially inside the bigger rectangle (at the top)
        height = height / 1000;   // Convert to meters
        let term1 = 1.250*(1.750**3)/3;
        let term2 = 0.75*((1.75-height)**3)/12;
        let term3 = 0.75*(1.75-height)*(((height+1.75)/2)**2);
        let ans = term1 - (term2 + term3);
        output+="MOI about the x-axis = "+ ans.toFixed(4) + " m⁴\n";
        resultBox.style.display = "block";
        resultBox.innerText = output;
        resultBox.style.color = "white";
    }
    else if(!isNaN(height) && (height<0)){
        height = Math.abs(height) / 1000;   // Convert to meters
        let term1 = 1.250*(1.750**3)/3;
        let term2 = 0.75*((0.375-height)**3)/3;
        let ans = term1 - term2; 
        output+="MOI about the x-axis = "+ ans.toFixed(4) + " m⁴\n";
        resultBox.style.display = "block";
        resultBox.innerText = output;
        resultBox.style.color = "white";
    }
    else {
        resultBox.style.display = "block";
        resultBox.innerText = "Please enter valid number!";
        resultBox.style.color = "#FFAA33";
    }
}