//LabThree Class Activity - Using if/else or switch statements produce percentage marking code.

//set variables
let grade = 55 //grade = 55
const gradeM = (grade, ) => grade //declare const function with parameters

//set else/if statements to assign values to each grade
if (grade >= 85 && grade <= 100) { //if grade is more than or equal to 85 and equal and less than 100
    console.log(grade = "A+") //console log grade = "A+"
}
if (grade >= 80 && grade <= 84) { //if grade is more than or equal to 80 and equal and less than 84
    console.log(grade = "A") //console log grade = "A"
}
if (grade >= 75 && grade <= 79) { //if grade is more than or equal to 75 and equal and less than 79
    console.log(grade = "A-") //console log grade = "A-"
}
if (grade >= 70 && grade <= 74) { //if grade is more than or equal to 70 and equal and less than 74
     console.log(grade = "B+") //console log grade = "B+"
 } 
 if (grade >= 65 && grade <= 69) { //if grade is more than or equal to 65 and equal and less than 69
     console.log(grade = "B") //console log grade =  "B"
 } 
 if (grade >= 60 && grade <= 64) { //if grade is more than or equal to 60 and equal and less than 64
     console.log(grade = "B-") //console log grade = "B-"
 }
  if (grade >= 55 && grade <= 59) { //if grade is more than or equal to 55 and equal and less than 59
     console.log(grade = "C+") //console log grade = "C+"
 } 
 if (grade >= 50 && grade <= 54) { //if grade is more than or equal to 50 and equal and less than 54
     console.log(grade = "C") //console log grade = "C"
 } 
 if (grade >= 45 && grade <= 49) { //if grade is more than or equal to 45 and equal and less than 49
     console.log(grade = "D") //console log grade = "D"
 } 
 if (grade >= 0 && grade <= 45) { //if grade is more than or equal to 0 and equal and less than 45
     console.log(grade = "E") //console log grade = "E"
 }
 
//create switch block for description
switch (grade) { //switch variable (grade)
    case "A+": //if grade = "A+"
    case "A": //or "A"
    case "A-"://or "A-"
        console.log(grade + " Pass with Distinction"); //output description for grades A || A- || A+ with grade
        break;//break for new cases
    case "B+": //if grade = "B+"
    case "B":// or "B"
    case "B-":// or "B-"
        console.log(grade + " Pass with Merit"); //output description for grade B || B- || B+ with grade
        break;// break for new cases
    case "C+": //if grade = "C+"
    case "C":// or "C"
        console.log(grade + " Pass") //output description for grade C || C+ with grade "C+ Pass"
        break; // break for new cases
    case "D": //if grade = "D"
    case "E": // or "E"
        console.log(grade + " Fail")//output description for grade D || E with grade
        break;//break to declare default output
    default: //default
        console.log("Please enter percentage..") //default value output
        break;// break for end of switch block
}

console.log(gradeM(grade)) //function called with variable grade -"C+"