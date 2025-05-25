document.write(typeof "Word");  //"typeof" operator
document.write (typeof 2);  //"typeof" operator
document.write("5" + 5);    // Type Coercion
document.wite ("eight" + 18); // Type Coercion

document.write(10 > 100);   //false boolean
document.write (13 < 36);   //true boolean

console.log(2+2);   //console.log() Method

document.write (10 == 10);  //double equal signs
document.write (3 == 15);

X = 10;                     // triple equal signs (true)
Y = 10;
document.write ( X === Y);

X = 10;                     // triple equal signs (false)    
Y = "10";
document.write ( X === Y);

document.write (25 > 13 && 35 > 16);   //and operator
document.write (3 > 85 || 54 > 23);  // or operator

function not_Function(){
    document.getElementById("Not").innerHTML =! ( 36 > 2 ); //not operator (false)
}

function not_Function(){
    document.getElementById("Not").innerHTML =! ( 26 > 145 ); //not operator (true)
}