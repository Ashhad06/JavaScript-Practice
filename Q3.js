let a = +prompt("Enter you first number")
let b = +prompt("Enter your second number")
let c = +prompt("Enter your third number")
let d = +prompt("Enter your fourth number")
let e = +prompt("Enter your fifth number")
if(a>b && a>c && a>d && a>e) {
    console.log(a + " is greater in all")
}
else if(b>a && b>c && b>d && b>e) {
    console.log(b +" is greater in all")
}
else if(c>a && c>b && c>d && c>e) {
    console.log(c ," is greater in all")
}
else if(d>a && d>b && d>c && d>e) {
    console.log(d + " is greater in all")
}
else if(e>a && e>b && e>c && e>d) {
    console.log(e + " is greater in all")
}