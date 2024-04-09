
#include <array>
#include <vector>
#include <ranges>
using namespace std;

class Solution {

    static const int NUMBER_OF_BUTTONS = 9;
    static const int ALPHABET_SIZE = 26;

public:
    int minimumKeypresses(const string& input) const {
        array<int, ALPHABET_SIZE> frequencies{};
        for (const auto& letter : input) {
            ++frequencies[letter - 'a'];
        }

        ranges::sort(frequencies, [](int x, int y) {return x > y; });
        int minKeypresses = 0;
        int uniqueLetters = 0;

        for (const auto& frequency : frequencies) {
            if (frequency > 0) {
                minKeypresses += frequency * getOptimalLetterPositionOnButton(++uniqueLetters);
            }
        }

        return minKeypresses;
    }

private:
    int getOptimalLetterPositionOnButton(int uniqueLetters) const {
        if (uniqueLetters <= NUMBER_OF_BUTTONS) {
            return 1;
        }
        if (uniqueLetters <= 2 * NUMBER_OF_BUTTONS) {
            return 2;
        }
        return 3;
    }
};
