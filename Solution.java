
import java.util.Arrays;

public class Solution {

    private static final int NUMBER_OF_BUTTONS = 9;
    private static final int ALPHABET_SIZE = 26;

    public int minimumKeypresses(String input) {
        int[] frequencies = new int[ALPHABET_SIZE];
        for (char letter : input.toCharArray()) {
            ++frequencies[letter - 'a'];
        }

        Arrays.sort(frequencies);
        int minKeypresses = 0;
        int uniqueLetters = 0;

        for (int i = frequencies.length - 1; i >= 0; --i) {
            if (frequencies[i] > 0) {
                minKeypresses += frequencies[i] * getOptimalLetterPositionOnButton(++uniqueLetters);
            }
        }

        return minKeypresses;
    }

    private int getOptimalLetterPositionOnButton(int uniqueLetters) {
        if (uniqueLetters <= NUMBER_OF_BUTTONS) {
            return 1;
        }
        if (uniqueLetters <= 2 * NUMBER_OF_BUTTONS) {
            return 2;
        }
        return 3;
    }
}
