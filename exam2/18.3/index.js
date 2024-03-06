function calcWordFrequencies() {
    let input = prompt("Enter a sentence: ");
    let words = input.split(" ");
    let freq = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (freq[word] === undefined) {
            freq[word] = 1;
        } else {
            freq[word]++;
        }
    }

    for(let word of words) {
        console.log(word + " " + freq[word]);
    }
}