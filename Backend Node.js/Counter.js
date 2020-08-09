const express=require('express')



module.exports=()=>{

    const fs = require('fs');
const file = 'abc.txt';
    fs.readFile(file, 'utf8', function (err, data) {

        if (err) throw err;
      
        const wordsArray = splitByWords(data);
        const wordsMap = createWordMap(wordsArray);
        const finalWordsArray = sortByCount(wordsMap);
    
       // res.send(finalWordsArray[0].name);
    
      // console.log(finalWordsArray);

      return finalWordsArray;
    
       //let i;
    // for (i = 0; i < 5; i++) {
    //      console.log(finalWordsArray[i].name + "  " + finalWordsArray[i].total);
    // }
    
    
    
    
    
    //   console.log('The word "' + finalWordsArray[0].name + '" appears the most in the file ' +
    //     finalWordsArray[0].total + ' times');
    
    /*
    output:
    [ { name: 'he', total: 10 },
      { name: 'again', total: 7 },
      { name: 'away', total: 7 },
      ... ]
    The word "he" appears the most in the file 10 times
    */
    
    });
    
    
    function splitByWords (text) {
    // split string by spaces (including spaces, tabs, and newlines)
    const wordsArray = text.split(/\s+/);
    return wordsArray;
    }
    
    
    function createWordMap (wordsArray) {
    
    // create map for word counts
    const wordsMap = {};
    /*
    wordsMap = {
      'Oh': 2,
      'Feelin': 1,
      ...
    }
    */
    wordsArray.forEach(function (key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
    });
    
    return wordsMap;
    
    }
    
    
    function sortByCount (wordsMap) {
    
    // sort by count in descending order
    constfinalWordsArray = [];
    finalWordsArray = Object.keys(wordsMap).map(function(key) {
    return {
      name: key,
      total: wordsMap[key]
    };
    });
    
    finalWordsArray.sort(function(a, b) {
    return b.total - a.total;
    });
    
    return finalWordsArray;
    
    }
    


}