// Task 1:Write a JavaScript program to check if a number is positive, negative, or zero usingan
// if-else statement.

let num=5000;
if(num>0){
    console.log("positive");
}else if(num<0){
    console.log("negative");
}
else{
    console.log("zero")
}

// Task:2Create a JavaScript program using a switch statement to display the day of theweek based on the
// user input (e.g., 1 for Monday, 2 for Tuesday, etc.).
let day=6;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break; 
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
                   
}