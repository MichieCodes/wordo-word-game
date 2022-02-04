const readline = require('readline');

// Accuracy color statuses
const VALIDATION_STATES = {
    correct: 'g',
    exists: 'y',
    incorrect: 'r'
};

// Create readline scanner
const sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Promisify sc.question and store it in sc.ask
sc.ask = (query) => new Promise((res) => sc.question(query, res));

/**
*   Gets the frequency of each letter 
*   @param {string[]} word
*   @returns {Object} 
*/
function getLetterFrequency(word) {
    let frequency = {};

    for(let c of word) {
        frequency[c] ||= 0;
        frequency[c]++;
    }
    
    return frequency;
}

/**
*   Checks accuracy of guess and returns list of validation states
*   @param {string[]} word
*   @param {string} guess
*   @returns {string[]} 
*/ 
function checkAccuracy(word, frequency, guess) {
    frequency = {...frequency};

    const accuracy = word.map((char, i) => {
        const guess_char = guess[i];

        if(guess_char === char)
            return VALIDATION_STATES.correct;
        else if(frequency[guess_char] && frequency[guess_char]--)
            return VALIDATION_STATES.exists;
        else 
            return VALIDATION_STATES.incorrect;

    });

    return accuracy;
}

/**
*   Plays the word game
*   @param {string[]} word
*/ 
async function playWordle(word) {
    word = [...word.toUpperCase()];
    
    let count = 0;

    while(true) {
        if(++count > 6) {
            console.log("YOU LOST");
            break;
        }

        let guess = (await sc.ask('Guess a word:\t')).toUpperCase();

        if(guess == 'Q') break;
        else if(guess.length != 5) {
            count--;
            continue;
        }

        const frequency = getLetterFrequency(word);
        const accuracy = checkAccuracy(word, frequency, guess);
 
        console.log('Guess : ', [...guess]);
        console.log('Result: ', accuracy);

        if(guess == word.join('')) {
            console.log('YOU WON');
            break;
        }
     }

    console.log("WORD WAS:\t", word.join(''));
}

playWordle('could');
sc.close(); 
