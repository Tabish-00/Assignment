const guestList = ["Ali", "Umer", "Aisha", "Talha"];
const guest2: string = "Ali";
const guest5: string = "Aisha";
const guest3: string = "Umer";

                  // More Guests
                // Add one new guest to the beginning of your array. 

guestList.unshift("hamza");
const guest1: string = "hamza";
                  //  Add one new guest to the middle of your array. 
guestList.splice(3, 0, "Tariq");
const guest4: string = "Tariq";
                  //  add one new guest to the end of your list. 
guestList.push("Komal")
const guest6: string = "Komal";
// console.log(guestList)
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
  else if (guestName === guest5) {
    console.log(`Sending an email to ${guestName}...`);
  
  }
  else if (guestName === guest6) {
    console.log(`Sending an email to ${guestName}...`);
  
  }
  else if (guestName === guest4) {
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