// if/else statements in javascript
var demoBool = true;
if (demoBool) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

// for loops in javascript
for (var i=0; i<4; i++) {
    console.log(i);
}

// while loops in javascript
var j=0;
while (j<4) {
    console.log(j);
    j++;
}

// switch statements in javascript
var switchVar = 'a'
switch(switchVar) {
    case 'a':
        console.log("A");
        break;
    default:
        console.log("DEFAULT");
}

// iterating through object properties
var demoObject = {
    key1 : "Jimmy",
    key2 : "Jimmy2"
}
for(var i in demoObject) {
    console.log(demoArray[i]);
}

// javascript functions

// function object assigned to a variable
// cannot be invoked until it is defined
// i.e. can't be invoked until after line 49
var countTen = function() {
    for(var i=0;i<10;i++) {
        console.log(i+1);
    }
};

// "global" function declaration
// can be invoked anywhere in the script
// even before line 54
function countTwenty() {
    for(var j=0;j<20;j++) {
        console.log(j+1);
    }
}

// asynchronous example
function demoAsync() {
    // this will print "SECOND", "FIRST", and then "THIRD"
    window.setTimeout(printOne(printThree),300);
    window.setTimeout(printTwo,50);
}

// function using a closure and a callback
function printOne(callback) {
    // we're returning a function object
    return function() {
        console.log("FIRST");
        // after this function console logs "FIRST"
        // it will invoke the function callback
        // callback is a parameter in the printOne function
        callback();
    }
}
function printTwo() {
    console.log("SECOND");
}
function printThree() {
    console.log("THIRD");
}