function calculateForce() {
    try {
        const m1 = parseFloat(document.getElementById("m1").value);
        const m2 = parseFloat(document.getElementById("m2").value);
        const m3 = parseFloat(document.getElementById("m3").value);
        const mu1 = parseFloat(document.getElementById("mu1").value);
        const mu2 = parseFloat(document.getElementById("mu2").value);
        const mu3 = parseFloat(document.getElementById("mu3").value);

        // Check for NaN
        if ([m1, m2, m3, mu1, mu2, mu3].some(isNaN)) {
            alert("Please enter valid numbers in all fields.");
            return;
        }

        // Check for negative mass
        if (m1 <= 0 || m2 <= 0 || m3 <= 0) {
            alert("Mass values must be greater than 0.");
            return;
        }

        // Check for friction coefficient >= 1
        if ( mu1 >= 1 || mu2 >= 1 || mu3 >= 1 ) {
            alert("Friction coefficients must be less than 1.");
            return;
        }
        if (( mu1<0) || (mu2<0) || (mu3<0) ){
            alert("Friction coefficients must be greater than or equal to 0.");
            return;
        }

        const g = 9.81;

        const N1 = m1 * g;
        const N2 = m2 * g;
        const N3 = m3 * g;

        const F1 = mu1 * N1;
        const F2 = mu2 * (N1 + N2);
        const F3 = mu3 * (N1 + N2 + N3);

        let case_a = mu1*m1*g + mu2*(m1*g+m2*g);
        let case_b = mu1*m1*g + mu3*(m1*g+m2*g+m3*g);

        let P, caseText;

        if (case_b < case_a) {
            P = case_b;
            caseText = "Case (b): Bottom block moves with middle block";
        } else {
            P = case_a;
            caseText = "Case (a) : Middle block moves; bottom block doesn't";
        }

        //P -= 88.20;

        document.getElementById("result").innerText = `Required force (N): ${P.toFixed(2)}`;
        document.getElementById("case").innerText = caseText;

    } catch (e) {
        alert("Error in calculation.");
    }
}
