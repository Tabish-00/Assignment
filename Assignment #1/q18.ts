let placesToVisit: string[] = [
    "Tokyo",
    "Paris",
    "Cairo",
    "New York",
    "Sydney"
  ];
  
  // Print the array in its original order
  console.log("Original order:");
  console.log(placesToVisit);
  
  // Print the array in alphabetical order without modifying the original list
  console.log("Alphabetical order:");
  console.log([...placesToVisit].sort());
  
  // Show that the array is still in its original order
  console.log("Original order (unchanged):");
  console.log(placesToVisit);
  
  // Print the array in reverse alphabetical order without changing the original list
  console.log("Reverse alphabetical order:");
  console.log([...placesToVisit].sort().reverse());
  
  // Show that the array is still in its original order
  console.log("Original order (unchanged):");
  console.log(placesToVisit);
  
  // Reverse the order of the list
  placesToVisit.reverse();
  console.log("Reversed order:");
  console.log(placesToVisit);
  
  // Reverse the order of the list again to get back to the original order
  placesToVisit.reverse();
  console.log("Original order (reversed again):");
  console.log(placesToVisit);
  
  // Sort the array in alphabetical order
  placesToVisit.sort();
  console.log("Alphabetical order (modified):");
  console.log(placesToVisit);
  
  // Sort the array in reverse alphabetical order
  placesToVisit.sort().reverse();
  console.log("Reverse alphabetical order (modified):");
  console.log(placesToVisit);
  