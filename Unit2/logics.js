function Compute() {
    let mass = parseFloat(document.getElementById("num1").value);
    let theta = parseFloat(document.getElementById("num2").value);
    let cb = parseFloat(document.getElementById("num3").value);
    let bd = parseFloat(document.getElementById("num4").value);
    let resultBox = document.getElementById("result");
    let output = "";
    let C_hor=1.0;
    let C_ver=1.0;

    theta = theta * Math.PI / 180;
    cb=cb/1000;
    bd=bd/1000;
    

    if (theta>(Math.PI/2)) {
        resultBox.innerText = "The crane's arm can't turn more than 90°!! ";
        resultBox.style.color = "#FFAA33";
        resultBox.style.display = "block";
        return; 
    }
    if (theta<-0.174533) {
        resultBox.innerText = "Crane's arm can't have the entered inclination\n(-10 <= θ <= 90) ";
        resultBox.style.color = "#FFAA33";
        resultBox.style.display = "block";
        return;
    }
    if (cb==0) {
        resultBox.innerText = "System cannot be in equlilibrium if CB length is 0!! ";
        resultBox.style.color = "#FFAA33";
        resultBox.style.display = "block";
        return; 
    }

    if (bd<0 || cb<0) {
        resultBox.innerText = "Leangth cannot be negative!!";
        resultBox.style.color = "#FFAA33";
        resultBox.style.display = "block";
        return; 
    }
    if (mass < 0) {
        resultBox.innerText = "Mass cannot be negative!!";
        resultBox.style.color = "#FFAA33";
        resultBox.style.display = "block";
        return; 
    }

    if (!isNaN(mass) && !isNaN(cb) && !isNaN(theta) && !isNaN(bd)) {
        let alpha=Math.atan2( (0.75+cb*Math.sin(theta)), cb*Math.cos(theta)-0.15);
        let beta=alpha-theta;
        let force=(mass*9.81*(cb+bd)*Math.cos(theta))/(Math.sin(beta)*cb);

        let pressure=4*force/(Math.PI*0.08*0.08);
        pressure=parseFloat(pressure.toFixed(2));
        output+="Pressure in the cylinder = "+Math.round(pressure/1000)+" KPa\n";

        C_hor=-force*Math.cos(alpha);
        C_hor=parseFloat(C_hor.toFixed(2));
        C_ver=force*Math.sin(alpha) - mass*9.81;
        C_ver=parseFloat(C_ver.toFixed(2));
        C_total=Math.sqrt(C_hor*C_hor+C_ver*C_ver);
        C_total=parseFloat(C_total.toFixed(2));

        if (C_hor<0) {
            output+="Horizontal reaction at C = "+(-1*C_hor)+"N towards left\n";
        }
        else{
            output+="Horizontal reaction at C = "+C_hor+"N towards right\n";
        }

        if (C_ver<0) {
            output+="Vertical reaction at C = "+(-1*C_ver)+"N upward\n";
        }
        else{
            output+="Vertical reaction at C = "+C_ver+"N downwards\n";
        }
        output+="Net reaction at C = "+C_total+"N\n";
        if (mass==0) {
            output+="(Mass of the arm is neglected)";
        }

        resultBox.style.display = "block";
        resultBox.innerText = output;
        resultBox.style.color = "white";
    }
    else {
        resultBox.style.display = "block";
        resultBox.innerText = "Please enter valid numbers!";
        resultBox.style.color = "#FFAA33";
    }
}

/*
function openGUI() {
    var canvas=document.getElementById('canvas');
    var c = canvas.getContext('2d');
    var len=150;
    var theta = parseInt(document.getElementById("num2").value);
    var CB = parseInt(document.getElementById("num3").value);
    var BD = parseInt(document.getElementById("num4").value);
    if(theta<=30){
        len=120
    }
    else if(theta>30 && theta<=40){
        len=120;
    }
    else if(theta>40 && theta<=50){
        len=100;
    }
    else if(theta>50 && theta<=60){
        len=89;
    }
    else{
        len=75;
    }
    
    theta = theta * Math.PI / 180;
    var d_x=35+len*Math.cos(theta);
    var d_y=80-len*Math.sin(theta);
    let x = (len*CB)/(BD+CB);
    var b_x=parseInt(35+x*Math.cos(theta));
    var b_y=parseInt(80-x*Math.sin(theta));
    
    c.fillStyle='#A52A2A';
    c.fillRect(20,140, 250,5);
    c.fillStyle='#581845';
    c.beginPath();
    c.strokeStyle='#000000'
    c.moveTo(35, 144);
    c.lineTo(35,80);
    c.lineTo(d_x, d_y);
    c.lineTo(d_x, d_y+40);
    c.lineTo(d_x+4, d_y+35);
    c.stroke();
    c.moveTo(d_x, d_y+40);
    c.lineTo(d_x-4, d_y+35);
    c.stroke();


    c.beginPath();
    c.arc(35, 80, 1.5, 0, Math.PI*2 , false);
    c.stroke();
    
    c.beginPath();
    c.arc(d_x, d_y, 1.5, 0, Math.PI*2 , false);
    c.stroke();

    c.beginPath();
    c.arc(43, 125, 1, 0, Math.PI*2 , false);
    c.stroke();

    c.beginPath();
    c.arc(b_x, b_y, 1, 0, Math.PI*2 , false);
    c.stroke();

    c.beginPath();
    c.moveTo(43, 125);
    c.lineTo(b_x, b_y);
    c.lineTo(b_x+4, b_y+6);
    c.moveTo(b_x, b_y);
    c.lineTo(b_x-8, b_y+7);
    c.stroke();


    console.log("drawing complete");
    console.log(len);
    console.log(d_x);
    console.log(d_y);

}
*/
