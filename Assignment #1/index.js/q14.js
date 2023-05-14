"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = ["Ali", "Umer", "Aisha", "Talha"];
const guest1 = "Ali";
const guest2 = "Aisha";
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
    else {
        console.log(`${guestName} has passed away.`);
        // Handle the case when all other guests are attending
    }
}
