//LabThree Class Activity - Using if/else or switch statements produce percentage marking code.
//set variables
let grade = 50
let score = (grade)
//set else/if statements
if (grade >= 85 && grade <= 100) {
    console.log("A+");
} else if (grade >= 80 && grade <= 84) {
    console.log("A")
} else if (grade >= 75 && grade <= 79) {
    console.log("A-")
} else if (grade >= 70 && grade <= 74) {
        console.log("B+")
} else if (grade >= 65 && grade <= 69) {
    console.log("B")
} else if (grade >= 60 && grade <= 64) {
    console.log("B-")
} else if (grade >= 55 && grade <= 59) {
    console.log("C+")
} else if (grade >= 50 && grade <= 54) {
    console.log("C")
} else if (grade >= 45 && grade <= 49) {
    console.log("D")
} else if (grade >= 0 && grade <= 45) {
    console.log("E")

//create switch block for description
switch(score){
    case "A+":
    case "A":
    case "A-":
    console.log("Pass with Distinction"); //description for grades A- to A+
    break;
    case "B+":
    case "B":
    case "B-":
    console.log("Pass with Merit"); //description for grades B- to B+
    break;
    case "C+":
    case "C":
    console.log("Pass") //description for grades C - C+
    break;
    case "D":
    case "E":
    console.log("Fail")//description for grades D & E
    break;
    default:
    console.log("Please enter percentage..")
    break;
    }
}