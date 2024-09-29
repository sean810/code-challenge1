function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const benefits = parseFloat(document.getElementById("benefits").value);
    const grossSalary = basicSalary + benefits;

    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        payee = 2400 + (grossSalary - 24000) * 0.25;
    } else {
        payee = 2400 + (8333 * 0.25) + (grossSalary - 32333) * 0.30;
    }

    let nhifDeduction = 0;
    if (grossSalary <= 5999) nhifDeduction = 150;
    else if (grossSalary <= 7999) nhifDeduction = 300;
    else if (grossSalary <= 11999) nhifDeduction = 400;
    else if (grossSalary <= 14999) nhifDeduction = 500;
    else if (grossSalary <= 19999) nhifDeduction = 600;
    else if (grossSalary <= 24999) nhifDeduction = 750;
    else if (grossSalary <= 29999) nhifDeduction = 800;
    else if (grossSalary <= 34999) nhifDeduction = 900;
    else if (grossSalary <= 39999) nhifDeduction = 950;
    else if (grossSalary <= 44999) nhifDeduction = 1000;
    else if (grossSalary <= 49999) nhifDeduction = 1100;
    else nhifDeduction = 1200;

    const nssfDeduction = Math.min(basicSalary * 0.06, 200);

    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);

    alert(`Gross Salary: Ksh ${grossSalary.toFixed(2)}\nPAYE: Ksh ${payee.toFixed(2)}\nNHIF Deduction: Ksh ${nhifDeduction}\nNSSF Deduction: Ksh ${nssfDeduction}\nNet Salary: Ksh ${netSalary.toFixed(2)}`);
}