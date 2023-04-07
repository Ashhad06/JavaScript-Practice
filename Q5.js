let English = +prompt ("Enter your English marks")
let Computer = +prompt ("Enter your Computer number")
let Maths = +prompt ("Enter your Maths number")

function percentage(num1, num2, num3){
    let x = num1 + num2 + num3
    let z = x/300 * 100
    return z
}
let total = percentage(English, Computer, Maths)
console.log("Total percentage is" + total + "%")

if (total <60){
    console.log("Your grade is F")
}
else if (total <70  ){
    console.log("Your grade is D")
}
else if (total <80){
    console.log("Your grade is C")
}
else if (total <90){
    console.log("Your grade is B")
}
else if(total <100){
    console.log("Your grade is A")
}