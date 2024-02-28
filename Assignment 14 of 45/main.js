"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ['Waqar', 'Ehsan', 'Hassan'];
for (var guest of guests) {
    console.log('Dear ' + `${guest},` + ' You are inivited for dinner at my home');
}
