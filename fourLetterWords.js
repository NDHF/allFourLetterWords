const lettersInAlphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function allFourLetterWords(array) {

    for (var h = 0; h < array.length; h++) {
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length; j++) {
                for (var k = 0; k < array.length; k++) {
                    document.write(array[h] + array[i] + array[j] + array[k] + " ");
                    // console.log(array[h] + array[i] + array[j] + array[k] + " ");
                }
            }
        }
    }
};

allFourLetterWords(lettersInAlphabet);