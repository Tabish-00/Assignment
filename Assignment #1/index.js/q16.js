"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the guest list
const guestList = [
    {
        name: "Ali",
        occupation: "Artist and inventor",
        alive: false,
    },
    {
        name: "Umer",
        occupation: "Physicist",
        alive: false,
    },
    {
        name: "Aisha",
        occupation: "Theoretical physicist and cosmologist",
        alive: false,
    },
    {
        name: "Mustafa",
        occupation: "Entrepreneur and engineer",
        alive: true,
    },
];
// Print the name of the guest who can't make it
const guestWhoCantMakeIt = "Aisha";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);
// Find the index of the guest who can't make it
const indexToRemove = guestList.findIndex(guest => guest.name === guestWhoCantMakeIt);
// Check if the guest to remove exists in the list
if (indexToRemove !== -1) {
    // Remove the guest who can't make it and add a new guest
    guestList.splice(indexToRemove, 1, {
        name: "Talha",
        occupation: "Inventor and electrical engineer",
        alive: false,
    });
}
else {
    console.log(`${guestWhoCantMakeIt} was not found in the guest list.`);
}
// Send invitations to each remaining guest
for (const guest of guestList) {
    const message = `Dear ${guest.name},\n\n` +
        `I would like to invite you to dinner at my place.\n` +
        `As a ${guest.occupation}, I believe you would be a fascinating guest to have at the table.\n` +
        `Please let me know if you are available and interested in joining us.\n\n` +
        `Best regards,\nYour Host`;
    if (guest.alive) {
        console.log(`Sending an email to ${guest.name}...`);
        // Here you can add code to send an email to the guest
    }
    else {
        console.log(`Sorry, ${guest.name} has passed away.`);
    }
}
