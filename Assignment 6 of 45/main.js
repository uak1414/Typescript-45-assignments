"use strict";
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
// so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
var b = "\t\n";
var person_nam = '\t Usman Ahmed khan \n'; //whitespace at begining and end of name
console.log("person's name" + ' = ' + person_nam);
var c = person_nam.trim(); //after striping the whitespace.Trim command replace all whitespace
console.log("person's name" + ' = ' + c);
