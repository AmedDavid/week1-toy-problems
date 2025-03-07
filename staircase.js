// Create a function that takes an integer and console logs a step shaped stair with the integer levels using the # character 

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i));
    }
}

staircase(3); // My Tests 
//   #
//  ##
// ###
staircase(5); //
//     #
//    ##
//   ###
//  ####
// #####