console.log('hi mom!');
// this is a comment
//

//change comment

var a =3;
var b = 2;
var c = a + b;

console.log('this is a string.');
console.log(a);
console.log(b);
console.log(c);

var first = "sally";
var last = "smith";

var fullName = first + " " + last;

console.log(fullName);

var d = Math.pow(2, 8);

console.log('2^8 ===', d);

a = 3;
b = 4;
c = 5;
d = 6;

var base = ((a+b) /(b-c)) * ((b-a)/(c-d));
var exp = b+a;
var e = Math.pow(base, exp);
console.log(e);




//branching with if/else statements
//


var age = 20;
if(age >= 21){
  console.log("you are legal to drink");
}else {
  console.log("you are not legal to drink");
}


// this is a switch statement
//


var color = 'blue';
switch (color){
  case 'green':
    console.log('i see green');
    break;
}
switch (color){
  case 'orange':
     console.log('i see orange');
    break;
}
switch (color){
  case 'blue':
     console.log('i see blue');
    break;
}
switch (color){
  case 'pink':
     console.log('i see pink');
}

//while loop
//


a=1;

while(a < 10){
  console.log('a is looping...', a)
  a++;
}

for(var i = 0; i <10; i++){
  console.log('i ===', i);
}


