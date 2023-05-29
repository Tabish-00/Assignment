"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = ["Ali", "Umer", "Aisha", "Talha"];
const guest2 = "Ali";
const guest5 = "Aisha";
const guest3 = "Umer";
// Shrinking Guest List:
// Add a new line that prints a message saying that you can invite only two people for dinner.  
guestList.unshift("hamza");
const guest1 = "hamza";
//  Add one new guest to the middle of your array. 
guestList.splice(3, 0, "Tariq");
const guest4 = "Tariq";
//  add one new guest to the end of your list. 
guestList.push("Komal");
const guest6 = "Komal";
// console.log(guestList)
for (let i = 0; i < guestList.length; i++) {
    const guestName = guestList[i];
    const message = `Dear ${guestName},\n\n` +
        `I would like to invite you to dinner at my place.\n` +
        `I believe you would be a fascinating guest to have at the table.\n` +
        `Please let me know if you are available and interested in joining us.\n\n` +
        `Best regards,\nYour Host`;
    if (guestName === guest1) {
        console.log(`Sending an email to ${guestName}...`);
    }
    else if (guestName === guest2) {
        console.log(`Sending an email to ${guestName}...`);
    }
    else if (guestName === guest5) {
        console.log(`sorry you can’t invite them to dinner ${guestName}...`);
    }
    else if (guestName === guest6) {
        console.log(`sorry you can’t invite them to dinner ${guestName}...`);
    }
    else if (guestName === guest4) {
        console.log(`sorry you can’t invite them to dinner ${guestName}...`);
    }
    else if (guestName === guest3) {
        console.log(`${guestName} is unable to make the dinner.`);
    }
    // Handle the case when guest1 can't make it
    else {
        console.log(`${guestName} has passed away.`);
        // Handle the case when all other guests are attending
    }
}
