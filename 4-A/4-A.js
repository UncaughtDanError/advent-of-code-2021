// read in the file
    // the first line becomes an array of integers
    // the rest needs to be an array of 2D arrays of integers

// create a function
// inputs: array of integers; array of bingo boards (2D arrays of integers)
// outputs: score of the winning board

// create an array of 2D arrays of zeros that corresponds to the bingo boards
// iterate over the numbers list
    // iterate through each bingo board
    // if the exists on a bingo board, change the corresponding zero to a one
    // check each bingo board to see if it wins (rows, columns, or diagonals of all ones)
    // if a board wins, then break the iteration  (what if 2 win simultaneously)
// calculate the solution score of the winning board and return it