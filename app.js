#! /usr/bin/env node
let names = 'MOHAMMAD WAJAHAT';
let roll = '123';
let standard = '12';
let math = 60; // Placeholder value
let urdu = 70; // Placeholder value
let physic = 80; // Placeholder value
let chemistry = 50; // Placeholder value
let english = 60; // Placeholder value
function calculateResults(math, urdu, physic, chemistry, english) {
    const obtainedMarks = math + urdu + physic + chemistry + english;
    const percentage = (obtainedMarks * 100) / 500;
    return { obtainedMarks, percentage };
}
function determineGradeAndRemarks(percentage) {
    let grade;
    let remarks;
    if (percentage > 90) {
        grade = 'A+';
        remarks = 'Excellence';
    }
    else if (percentage > 80) {
        grade = 'A';
        remarks = 'Very Good';
    }
    else if (percentage > 70) {
        grade = 'B';
        remarks = 'Good';
    }
    else if (percentage > 60) {
        grade = 'C';
        remarks = 'Superb';
    }
    else if (percentage > 50) {
        grade = 'D';
        remarks = 'Not Bad';
    }
    else if (percentage > 40) {
        grade = 'E';
        remarks = 'Running Pass';
    }
    else {
        grade = 'Fail';
        remarks = 'Need improvement';
    }
    return { grade, remarks };
}
const { obtainedMarks, percentage } = calculateResults(math, urdu, physic, chemistry, english);
const { grade, remarks } = determineGradeAndRemarks(percentage);
console.log(`Your name is: ${names}`);
console.log(`Your roll number is: ${roll}`);
console.log(`Your class is: ${standard}`);
console.log(`Your total marks are: ${obtainedMarks}`);
console.log(`Your percentage is: ${percentage.toFixed(2)}%`);
console.log(`Your Grade is: ${grade}`);
console.log(`Remarks are: ${remarks}`);
export {};
