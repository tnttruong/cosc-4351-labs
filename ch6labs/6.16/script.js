function calcWordFrequencies() {
    let words = prompt("enter words separated by spaces");
    let wordList = words.split(" ");
    let freq = {};

    for(i=0; i<wordList.length; i++){
        let word = wordList[i];
        if(word in freq){
            freq[word]++;
        }
        else{
            freq[word] = 1;
        }
    }

    for(let word in freq){
        console.log(word + " " + freq[word]);
    }
}