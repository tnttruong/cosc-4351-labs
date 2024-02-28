function calcWordFrequencies() {
   let input = prompt("Enter words: ");
    let words = input.split(' ');
    let freq = {};

    for(let i=0; i<words.length; i++){
        let word = words[i];
        if(freq[word]) {
            freq[word]++;
        } else {
            freq[word] = 1;
        }
    }
    for(let word of words){
        console.log(word + " " + freq[word]);
    }

}