// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

function calculateTax(grossSalary) {
    // Kenya PAYE Tax Brackets (as of 2024)
    let tax = 0;

    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else {
        tax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.3);
    }



    // Personal relief of KES 2400
    tax -= 2400;
    return tax > 0 ? tax : 0;
}

function calculateNHIF(grossSalary) {
    // NHIF rates based on salary brackets


    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}

function calculateNSSF(grossSalary) {
    // NSSF Tier I & II (6% of pensionable salary up to a max of 18,000)
    let pensionableEarnings = Math.min(grossSalary, 18000);
    return pensionableEarnings * 0.06;


    // NSSF Tier III (Voluntary contributions)
    // let voluntaryContribution = 0;
    // if (grossSalary > 18000) {
    //     voluntaryContribution = (grossSalary - 18000) * 0.06;
    // }
    // return voluntaryContribution;
}

function netSalaryCalculator(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let payee = calculateTax(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let netSalary = grossSalary - (payee + nhif + nssf);

    return { grossSalary, payee, nhif, nssf, netSalary };
}

// My Test
console.log(netSalaryCalculator(50000, 10000));
