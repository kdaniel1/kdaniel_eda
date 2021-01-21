//Kennedy Daniel 
function calculateGrade() {
// Variables from user form input:
let assignment = document.getElementById("assignments").value/100;
let group = Number(document.getElementById("group").value)/100;
let quiz = Number(document.getElementById("quizzes").value)/100;
let exams = Number(document.getElementById("exams").value)/100;
let intex = Number(document.getElementById("intex").value)/100;
let percent = (assignment * .5) + (group * .1) + (quiz * .1) + (exams * .2) + (intex * .1);
// making the final grade a whole number again
percent = Math.round(percent * 100)
let final = "";
final = getGrade(percent)

  function getGrade(percent) {
    if (percent >= 94) {
        return "A";
    }
    else if (94 > percent >= 90) {
        return "A-";
    }
    else if (90 > percent >= 87) {
        return "B+";
    }
    else if (87 >percent >= 83) {
        return "B";
    }
    else if (83 > percent >= 80) {
        return "B-";
    }
    else if (80 > percent >= 77) {
        return "C+";
    }
    else if (77 > percent >= 74) {
        return "C";
    }
    else if (74 > percent >= 70) {
        return "C-";
    }
    else if (70 > percent >= 67) {
        return "D+";
    }
    else if (67 > percent >= 64) {
        return "D";
    }
    else if (64 > percent >= 60) {
        return "D-";
    }
    else {
        return "E";
    }

    }
 let  output = ("Your final grade is " + final + " with a score of " + percent);
  document.getElementById("output").innerHTML = output;

}

