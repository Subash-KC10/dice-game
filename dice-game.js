function rollDice() {
    let goldCoins = 0;
    let runningCount = 0;

    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll < 5) {
            continue;
        }

        if (roll === 5, 6) {
            alert('Congratulations, you win ' + roll + ' gold coins!');
            goldCoins += roll;
            alert('Your total so far is ' + goldCoins + ' gold coins!');
            runningCount += goldCoins;
        }

    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}