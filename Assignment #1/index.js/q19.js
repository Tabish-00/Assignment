"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = ["Ali", "Umer", "Aisha", "Talha"];
console.log("Invitation Messages:");
guestList.forEach((guest) => {
    console.log(`Dear ${guestList},\n\n` +
        `I would like to invite you to dinner at my place.\n` +
        `I believe you would be a fascinating guest to have at the table.\n` +
        `Please let me know if you are available and interested in joining us.\n\n` +
        `Best regards,\nYour Host`);
});
console.log(`Number of people invited to dinner: ${guestList.length}`);
