function calcWordFrequencies() {
    let words = prompt("enter words");
    let wordList = words.split(" ");

    let wordFreq = {}; 

    for(i=0; i<wordList.length; i++){
        let word = wordList[i];
        if(wordFreq[word]){
            wordFreq[word] += 1;
        }
        else{
            wordFreq[word] = 1;
        }
    }

    for(let word of wordList){
        console.log(word + " " + wordFreq[word]);
    }
}