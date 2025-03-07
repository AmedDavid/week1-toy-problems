// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


function studentGradeGenerator(marks) {
    if (marks > 79) return 'A';
    if (marks >= 60) return 'B';
    if (marks >= 50) return 'C';
    if (marks >= 40) return 'D';
    return 'E';
}

// My Tests
console.log(studentGradeGenerator(85)); // 'A'
console.log(studentGradeGenerator(45)); // 'D'
console.log(studentGradeGenerator(72)); // 'B'
console.log(studentGradeGenerator(30)); // 'E'
