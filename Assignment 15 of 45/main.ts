//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// Print a second set of invitation messages, one for each person who is still in your list


var guests = ['Waqar' , 'Ehsan' , 'Hassan' ]
for (var guest of guests) {
    console.log('Dear ' +`${guest},` + ' You are inivited for dinner at my home')
    
}
console.log( guests[1] + ' is not attending the dinner')

//modify guest list
var guests = ["Waqar" , "Ehsan" ,"Hassan" ];
guests[1]= "Hamza"
//console.log(guests)
//inviting new guests
for (var guest of guests) {
    console.log('Dear '+`${guest},` +'You are invited for dinner at my home') 
}


