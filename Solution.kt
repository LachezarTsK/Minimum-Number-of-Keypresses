
class Solution {

    companion object {
        const val NUMBER_OF_BUTTONS = 9
        const val ALPHABET_SIZE = 26
    }

    fun minimumKeypresses(input: String): Int {
        val frequencies = IntArray(ALPHABET_SIZE);
        for (letter in input) {
            ++frequencies[letter - 'a'];
        }

        frequencies.sortDescending();
        var minKeypresses = 0;
        var uniqueLetters = 0;

        for (frequency in frequencies) {
            if (frequency > 0) {
                minKeypresses += frequency * getOptimalLetterPositionOnButton(++uniqueLetters);
            }
        }

        return minKeypresses;
    }

    private fun getOptimalLetterPositionOnButton(uniqueLetters: Int): Int {
        if (uniqueLetters <= NUMBER_OF_BUTTONS) {
            return 1;
        }
        if (uniqueLetters <= 2 * NUMBER_OF_BUTTONS) {
            return 2;
        }
        return 3;
    }
}
