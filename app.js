// var inp = prompt("Enter  your name ")
// var inp1=alert( "Hi "+ inp)


// var inp = prompt(" Enter a number to print its multiplication table");  

// for (i=1; i<=10; i++){
//    document.write(inp + "x" + i + " " + "=" + " "+ inp*i + "<br>");
// }

// var inp = prompt("Enter your City Name");
// if(inp==="Karachi"){
//     alert("Karachi is the city of light")
// }
// else{
//     alert(inp + "is very clean city")
// }

// var inp = prompt("Enter your Gender");
// if(inp==="male"){
//     alert("Good Morning Sir!")
// }else if(inp==="female"){
//     alert("Good Morning Mam!")
// }
// else{
//     alert("Please Enter your Gender")
// }

// var inp = prompt("Enter a any signal color what do you want information of this color");
// if(inp==="red"){
//     alert("Vehicles Must Stop ")
// }else if(inp==="yellow"){
//     alert("vehicles should get ready to move")
// }
// else if (inp==="green"){
//     alert("vehicles can move now")
// }

// var inp = prompt("Enter your Age");
// if(inp>=18){
//     alert("You Are Welcome of this cite");
// }else if(inp<=17){
//     alert("You are not Allowed of this cite");
// }


// var inp =prompt("How many fuel liter in your car");
// if(inp<=1){
//     alert("Please refill the fuel in your car")
// }
// else if(inp>2){

//     alert("You car is riding a 100km")
// }
// else{
//     alert("ok")
// }

// var inptotal= prompt("Enter a total marks of your result day");
// var obt=prompt("Enter a your obtain mark");
// var percent=obt/inptotal *100;
// if(percent>=80){
//     alert("Excellent"+"your grade is A+ "+ " " +" & your Percentage is"+ percent);

// }else if(percent>=70){
//     alert("Good"+"your grade is A "+"& your Percentage is"+ " "+ percent)
// }
// else if(percent>=60){
//     alert("Not Good"+" your grade is B "+"& your Percentage is"+ " "+ percent)
// }
// else if(percent>=50){
//     alert("You need to imporve"+" your grade is c "+"& your Percentage is"+ " "+ percent)
// }
// else if(percent>=30){
//     alert("Fail"+"your grade is d "+"& your Percentage is"+ " "+ percent)
// }
// console.log(percent)

// document.write("<h3>Price Of T-Shirt is 1000</h3>");
// var item1 = prompt("Enter a quantity of Your Item1");

// var final1 = item1 * 1000;
// document.write("Total T-shirt Amount is"+  final1)
// document.write("<h3>Price Of Usb flash is 700</h3>");
// var item2 = prompt("Enter a quantity of Your Flash");
// var final2 = item2 * 700;

// document.write("Total USB Flash Amount is"+  final2);

// var totalAmount= final1 + final2;

// document.write("<h3>Total Amount of your</h3> "+ totalAmount);
// document.write("<h3>Disscount  100RS</h3>")
// var finalamount= totalAmount - 100;
// document.write("Your Final amount is"+ finalamount)


// var seceret = 3;
// var inp = +prompt("Enter a number of 1 to 10")
// if(inp === seceret){
//     alert("Your Are Won of this game")
// }
// else{
//     alert("You are Lose Game Please try Again")
// }

// var inp =prompt("Enter a number of divisble by 3")
// if(inp % 3){
//     alert(inp +"This is divisble by 3 ")
// }
// else{
//     alert(inp + 'This is not divisble by 3')
// }
// var num = +prompt("Enter a number");
// if (!isNaN(num)) {
//     if (num % 2 == 0) {

//         alert("This is Even number")
//     }
//     else {
//         alert("this is odd number")
//     }
// }
// var num = +prompt("Enter a number chechked this is even number then odd number")
// if(num % 2 ==0){
//     alert("This is even Number")
// }
// else{
//     alert("This is odd number")
// }
// var inp = prompt("Enter a your cite temperature")
// if(inp>=40){
//     alert("Omg Its to hot day")
// }
// else if(inp>=20){
//     alert("The Weather today is Normal.")
// }
// else if(inp>=10){
//     alert("The Weather today is Cool .")
// }
// else if(inp>=0){
//     alert("OMG! Today’s weather is so Cool")
// }


// var inp1 = +prompt("Enter a first Number you want calculate to other number")
// var operater = prompt("Enter a Operator");
// var inp2 = +prompt("Enter a SECOND Number you want calculate to first number")
// if(operater === "+"){
//     alert(inp1 + inp2)
// }
// else if(operater === "-"){
//     alert(inp1 - inp2)
// }
// else if(operater === "*"){
//     alert(inp1 * inp2)
// }else if(operater === "/"){
//     alert(inp1 / inp2)
// }else if(operater === "%"){
//     alert(inp1 % inp2)
// }
// var inp=prompt("what is today day");
// if(inp=== "saturday" || inp === "Saturday"){
//     alert("Its a week days")
// }else if(inp === "sunday" || inp === "Sunday"){
//     alert("its a holiday")
// }
// else{
//     alert("Its a week days")
// }

// var inp = prompt("Enter  your user score")
// if(inp >=50){
//     alert("You are Passed")
// }else{
//     alert("Please try Again")
// }

// var inp1 = +prompt("Enter a first number")
// var inp2 = +prompt("Enter a Second number")
// if(inp1 === inp2){
//     alert("Your Both number is Equal")
// }
// else if(inp1 > inp2){
//     alert("Your first number is greater than second number")
// }
// else if(inp1 < inp2){
//     alert("Your second number is greater than first number")
// }

var inp = +prompt('Enter a number check this is positive then neative number')
if(inp>0){
    alert("This is positive number")
}
else if(inp<0){
    alert("This is negative number")
}
else{
    alert("PLease Enter a number")
}
