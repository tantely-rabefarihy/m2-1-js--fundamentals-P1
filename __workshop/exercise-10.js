function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let triangle = function (length) {
    let line = "";
    for (let i = 1; i <= length; i++) {
      for (let j =1; j<= i; j++) {
        line += "#";
      } line += "\n";
    } return line + "\n";
  }
console.log(triangle(7))

  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-10

module.exports = exercise10;
