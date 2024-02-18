function calcWordFrequencies() {
    let words = prompt("enter words");
    let wordList = words.split(" ");
    let freq = {}; 

    for(i=0; i<wordList.length; i++){
        let word = wordList[i];
        if(freq[word]){
            freq[word] += 1;
        }
        else{
            freq[word] = 1;
        }
    }

    for(let word of wordList){
        console.log(word + " " + freq[word]);
    }
}