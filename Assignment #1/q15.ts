const guestList: string[] = ["Ali", "Umer", "Aisha", "Talha"];
const guest1: string = "Ali";
const guest2: string = "Aisha";
                     // Changing Guest List
const guest3: string = "Umer";

for (let i = 0; i < guestList.length; i++) {
  const guestName: string = guestList[i];
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
  else if (guestName === guest3) {
    console.log(`${guestName} is unable to make the dinner.`);
  }
   // Handle the case when guest1 can't make it
   else {
    console.log(`${guestName} has passed away.`);
    // Handle the case when all other guests are attending
  }
}