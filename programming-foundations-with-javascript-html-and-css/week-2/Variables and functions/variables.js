//Try It! Using Variables, Methods and Functions

/* Try the example you saw in the Variables video of creating and initializing three variables. 
Add code to print out x, y, and z and note their values. */
var x = 3;
var y = 4;
var z = x + 2*y;

print(x);
print(y);
print(z);

//Next, if you wrote the following code, what do you think would be the values of x and y printed? Try it and see!  
var x = 3;
var y = 2;
y = x;

print (x);
print (y);

/* Write the function you saw in the Functions video. Also write the following line of code you saw in the Functions video 
that calls the square function on the value 4 and stores the result in the variable y. 
Print out y. Call the square function on a few numbers other than 4. */
function square(x) {
	var ans = x*x;
	return ans;
}

var y = square(4);
print(y);

var y = square(3);
print(y);

var y = square(2);
print(y);

//What if you wanted to turn your square function into a cube function?
function cube(x) {
	var ans = x*x*x;
	return ans;
}

var y = cube(4);
print(y);

var y = cube(3);
print(y);

var y = cube(2);
print(y);

//Write a function that adds three numbers together.
function sum(a, b, c) {
	var ans = a + b + c;
	return ans;
}

//ans = 7 + 3 + 1
print(sum(7,3,1));

//Write a function that adds/concatenates two strings
function concatenate (string1, string2) {
    var ans = string1 + string2;
    return ans;
}

print(concatenate("Jo", "hn"));

//Rampup Programming Exercise - Variables, Methods and Functions

//Write a function named phrase3words that puts three words together into a phrase that is of type string with blanks between the words
function phrase3words(value1, value2, value3) {
    var answer = value1 + " " + value2 + " " + value3;
    return answer;
}


var result1 = phrase3words("smile","at","everyone");
print(result1);

var result2 = phrase3words("everyone","wave", "back");
print(result2);

var result3 = phrase3words("coding","is", "fun");
print(result3);

//Write a function named reformatName that puts a name together in a specific format
function reformatName(first, last) {
    var answer = last + ", " + first;
    return answer;
}

var result = reformatName("Susan", "Rodger");
print(result);

result = reformatName("Robert", "Duvall");
print(result);











