
function minimumKeypresses(input: string): number {
    this.NUMBER_OF_BUTTONS = 9;
    const ALPHABET_SIZE = 26;
    const frequencies = new Array<number>(ALPHABET_SIZE).fill(0);

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


function getOptimalLetterPositionOnButton(uniqueLetters: number): number {
    if (uniqueLetters <= this.NUMBER_OF_BUTTONS) {
        return 1;
    }
    if (uniqueLetters <= 2 * this.NUMBER_OF_BUTTONS) {
        return 2;
    }
    return 3;
}


function codePoint(character: string): number {
    return character.codePointAt(0);
}
