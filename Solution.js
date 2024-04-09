
/**
 * @param {string} input
 * @return {number}
 */
var minimumKeypresses = function (input) {
    this.NUMBER_OF_BUTTONS = 9;
    const ALPHABET_SIZE = 26;
    const frequencies = new Array(ALPHABET_SIZE).fill(0);

    for (let letter of input) {
        ++frequencies[codePoint(letter) - codePoint('a')];
    }

    frequencies.sort((x, y) => y - x);
    let minKeypresses = 0;
    let uniqueLetters = 0;

    for (let frequency of frequencies) {
        if (frequency > 0) {
            minKeypresses += frequency * getOptimalLetterPositionOnButton(++uniqueLetters);
        }
    }

    return minKeypresses;
};

/**
 * @param {number} uniqueLetters
 * @return {number}
 */
function getOptimalLetterPositionOnButton(uniqueLetters) {
    if (uniqueLetters <= this.NUMBER_OF_BUTTONS) {
        return 1;
    }
    if (uniqueLetters <= 2 * this.NUMBER_OF_BUTTONS) {
        return 2;
    }
    return 3;
}

/**
 * @param {string} character
 * @return {number}
 */
function codePoint(character) {
    return character.codePointAt(0);
}
