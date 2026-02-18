const alpha1 = ["ABC"];
const alpha2 = ["DEF"];
const alpha3 = ["GHI"];
const alpha4 = ["JKL"];
const alpha5 = ["MNO"];

/* 
    A small script playing with the order of 
    functions using the concept of callbacks
*/
function printLetters(letters) {
    console.log(letters);
}

function printLettersWithCallback(letters, letters2) {
    console.log(letters)
    if(letters2) {
        printLetters(letters2);
    }
}

function alphabetUnordered() {
    printLetters(alpha1);
    printLetters(alpha3);
    printLetters(alpha4);
    printLetters(alpha2);
    printLetters(alpha5);
}

// expected order of logs: ["ABC"], ["GHI"], ["JKL"], ["DEF"], ["MNO"]
// alphabetUnordered();

function alphabetOrdered() {
    printLettersWithCallback(alpha1, alpha2);
    printLettersWithCallback(alpha3, alpha4);
    printLettersWithCallback(alpha5);
}

// expected order of logs (correct) ["ABC", "DEF", "GHI", "JKL", "MNO"]
alphabetOrdered(); 

