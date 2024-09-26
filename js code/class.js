
// 27.Determine Age Group Based on Input (if-else): Write a function
// determineAgeGroup(age) that outputs the age group based on input:
// • 0-12 years: "Child"
// • 13-19 years: "Teenager"
// • 20-64 years: "Adult"
// • 65+ years: "Senior"

function determineAgeGroup(age) {
    if (age >= 0 && age <= 12) {
        console.log("Child");
    } else if (age >= 13 && age <= 19) {
        console.log("Teenager");
    } else if (age >= 20 && age <= 64) {
        console.log("Adult");
    } else if (age >= 65) {
        console.log("Senior");
    } else {
        console.log("Invalid age");
    }
}

determineAgeGroup(10);
determineAgeGroup(15); 
determineAgeGroup(30);
determineAgeGroup(70); 


// 28.Grade Evaluation (Switch Statement): Write a function getGrade(score) that
// returns a grade based on the following:
// • A: 90-100
// • B: 80-89
// • C: 70-79
// • D: 60-69
// • F: Below 60 If the score is out of range (less than 0 or greater than 100),
// return "Invalid score."

function getGrade(score) {
    switch (true) {
        case (score >= 90 && score <= 100):
            return "A";
        case (score >= 80 && score < 90):
            return "B";
        case (score >= 70 && score < 80):
            return "C";
        case (score >= 60 && score < 70):
            return "D";
        case (score < 60 && score >= 0):
            return "F";
        default:
            return "Invalid score.";
    }
}

console.log(getGrade(95)); 
console.log(getGrade(85)); 
console.log(getGrade(75)); 
console.log(getGrade(65)); 
console.log(getGrade(50)); 
console.log(getGrade(-5));
console.log(getGrade(105));



// 29.Check Even or Odd (if statement): Write a function checkEvenOdd(number) that
// returns whether the number is "Even" or "Odd."
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(-2));
console.log(checkEvenOdd(-3));


//30. Simple Object Creation: Create a car object with properties:
// • make: car manufacturer (e.g., "Toyota")
// • model: car model (e.g., "Corolla")
// • year: manufacturing year (e.g., 2020)


const car = {
    make: "Toyota",
    model: "Corolla",  
    year: 2020
};


console.log(car);
console.log("Make:", car.make);
console.log("Model:", car.model); 
console.log("Year:", car.year);   
