

//function declaration
function showMessage() {
  alert('hello everyone!' );
}
showMessage();

//local variables
function secondMessage() {
  let message= "hello, I'm Ben!";

  alert(message);
}
secondMessage();

// outer variables
let userName= 'john';

function johnMessage() {
 userName= 'bob';
  message= 'hello, ' + userName;
 alert(message)
}
alert( userName );
johnMessage();
alert( userName );

//parameters
function benMessage(from,text) {
  alert(from + ':' + text);
}

benMessage('Ben',' Hello!');
benMessage('Ben', " What's up?");

//alternative default parameters
function emptyMessage(text) {
  if (text === undefined) {
   text = 'empty message';
  }
     alert (text);
}
emptyMessage();

function emptyMessage2(from,text){
 // if no text is defined or faulty, sets to empty
  text = text || 'empty';
}
emptyMessage2();



function showCount (count) {
  // if count is undefined or null sets to unknown
  alert(count ?? "unknown");
}
showCount(0);
showCount(null);
showCount();

//returning a value
function sum(a,b) {
  return a+b;
}
let result = sum (1, 2);
alert(result); //3

function checkAge(age){
  if (age>=18){
    return true;
   } else {
    return confirm('Do you have permission from your parents?')
  }
  }
let age = prompt('how old are you?', 18);

if (checkAge(age)){
  alert( 'access granted');
} else {
  alert('access denied')
}

function showMovie(age) {
  if ( !checkAge(age)) {
    return;
  }
  alert("Showing you the movie");
}

function doNothing(){
  /* empty */}
alert(doNothing()=== undefined);

function doNothing2(){
  return;
}
alert(doNothing2()=== undefined);

function checkAge2(age){
  return (age >18) ? true : confirm ('did your parents allow you?')
}

function checkAge3 (age){
  return (age>18) || confirm('did parents allow you?')
}


function min(a,b){
  if (a > b) {
  return b;
  } else {
    return a;
}
}
 min(8,5);