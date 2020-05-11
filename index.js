//LabThree Class Activity - Using if/else or switch statements produce percentage marking code.
//set variables
let grade = 55
const gradeM = (grade, ) => grade
//const gradeM = (grade) => grade
/*function returns the grade output but not grade description.

Not sure how to introduce the switch statement at this point.
As from earlier lesson introducing a new variable to create another parameter confuses the switch statement

** Added (grade) to switch console.log
**introducing a new variable for the switch statement
(returns the value for grade instead of the string value, unable to link cases to 'if' parameters)
let gradeD = grade 
const gradeM = (grade, gradeD) => grade + gradeD
if (grade >= 85 && grade <= 100) {
    console.log(grade + ", A+")                                                      99, A+
switch (gradeD) {
    case grade + ", A+":
        console.log(grade + " Pass with Distinction")                                (default "Please enter a percentage...")
        
        console.log(gradeM(grade))                                                   NaN

   >>> Not what we want.   

**Putting the switch statement within the function returns undefined
const gradeM = (grade) => {switch (grade) {
    case "A+":
    case "A":
    case "A-":
        console.log(grade + " Pass with Distinction"); //description for grades A- to A+ with grade
        break;
      case "B+":
        case "B":
        case "B-":
            console.log(grade + " Pass with Merit"); //description for grades B- to B+ with grade
            break;
        case "C+":
        case "C":
            console.log(grade + " Pass") //description for grades C - C+ with grade
            break;
        case "D":
        case "E":
            console.log(grade + " Fail")//description for grades D & E with grade
            break;
        default:
            console.log("Please enter percentage..") //default value
            break;}
    }



** Wondering if there's a way to have the switch statement output as an array output in order to give another parameter to the function
*/
//set else/if statements
if (grade >= 85 && grade <= 100) {
    console.log(grade = "A+")
}
if (grade >= 80 && grade <= 84) {
    console.log(grade = "A")
}
if (grade >= 75 && grade <= 79) {
    console.log(grade = "A-")
}
if (grade >= 70 && grade <= 74) {
     console.log(grade = "B+")
 } 
 if (grade >= 65 && grade <= 69) {
     console.log(grade = "B")
 } 
 if (grade >= 60 && grade <= 64) {
     console.log(grade = "B-")
 }
  if (grade >= 55 && grade <= 59) {
     console.log(grade = "C+")
 } 
 if (grade >= 50 && grade <= 54) {
     console.log(grade = "C")
 } 
 if (grade >= 45 && grade <= 49) {
     console.log(grade = "D")
 } 
 if (grade >= 0 && grade <= 45) {
     console.log(grade = "E")
 }
 
//create switch block for description
switch (grade) {
    case "A+":
    case "A":
    case "A-":
        console.log(grade + " Pass with Distinction"); //description for grades A- to A+ with grade
        break;
    case "B+":
    case "B":
    case "B-":
        console.log(grade + " Pass with Merit"); //description for grades B- to B+ with grade
        break;
    case "C+":
    case "C":
        console.log(grade + " Pass") //description for grades C - C+ with grade
        break;
    case "D":
    case "E":
        console.log(grade + " Fail")//description for grades D & E with grade
        break;
    default:
        console.log("Please enter percentage..") //default value
        break;
}

console.log(gradeM(grade))