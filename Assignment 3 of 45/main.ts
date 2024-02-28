var a =  "Usman ahmEd kHan"

// for lowercase
var b = a.toLowerCase()
console.log(b)

//for uppercase
var c = a.toUpperCase()
console.log(c)

//for Titlecase

var namee= a.split(" ") // it will split the name like ['usman' , 'ahmed', khan]

var str="" //for loop me var chahye to yhn define krwa dia

for (var i = 0 ; i < namee.length ; i++) { // spit hne k bd lenght function se lenght count hogi r loop chaly ga. 
    str+=namee[i].charAt(0).toUpperCase()+namee[i].slice(1).toLowerCase()+" "
}; 
console.log(str)






