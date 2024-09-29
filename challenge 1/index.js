function calculateGrade() {
    const marksInput = document.getElementById('marks').value;
    const resultDiv = document.getElementById('result');
    const marks =(marksInput);
    
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 49) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    resultDiv.innerText = `Your grade is: ${grade}`;
}