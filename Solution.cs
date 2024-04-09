
using System;

public class Solution
{
    private static readonly int NUMBER_OF_BUTTONS = 9;
    private static readonly int ALPHABET_SIZE = 26;

    public int MinimumKeypresses(string input)
    {
        int[] frequencies = new int[ALPHABET_SIZE];
        foreach (char letter in input)
        {
            ++frequencies[letter - 'a'];
        }

        Array.Sort(frequencies, (x, y) => y - x);
        int minKeypresses = 0;
        int uniqueLetters = 0;

        foreach (int frequency in frequencies)
        {
            if (frequency > 0)
            {
                minKeypresses += frequency * GetOptimalLetterPositionOnButton(++uniqueLetters);
            }
        }

        return minKeypresses;
    }

    private int GetOptimalLetterPositionOnButton(int uniqueLetters)
    {
        if (uniqueLetters <= NUMBER_OF_BUTTONS)
        {
            return 1;
        }
        if (uniqueLetters <= 2 * NUMBER_OF_BUTTONS)
        {
            return 2;
        }
        return 3;
    }
}
