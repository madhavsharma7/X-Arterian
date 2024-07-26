function generateChessboard(width, height) {
  let chessboard = '';

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // Determine if the current cell should be "#" or " "
      chessboard += (i + j) % 2 === 0 ? '#' : ' ';
    }
    // Add a newline character to move to the next row
    chessboard += '\n';
  }

  return chessboard;
}

// Get width and height from user
let width = prompt("Enter the width of the chessboard:");
width = Number.parseInt(width);
let height = prompt("Enter the height of the chessboard:");
height = Number.parseInt(height);

// Check if width and height are valid numbers
if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
  console.log("Please enter valid positive numbers for width and height.");
} else {
  // Generate and display the chessboard
  console.log(generateChessboard(width, height));
}
