const express=require('express')
const app=express()
const PORT=5000

const router=express.Router();
const fs = require('fs');
const file = 'abc.txt';

app.use(express.json());
app.listen(PORT,()=>{

console.log('Server is running on port ',PORT);})



 fs.readFile(file, 'utf8', function (err, data) {

    if (err) throw err;
  
    const wordsArray = splitByWords(data);
    const wordsMap = createWordMap(wordsArray);
    const finalWordsArray = sortByCount(wordsMap);

   // res.send(finalWordsArray[0].name);

   console.log(finalWordsArray);
});
function splitByWords (text) {
const wordsArray = text.split(/\s+/);
return wordsArray;
}
function createWordMap (wordsArray) {
const wordsMap = {};
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

app.get('/User',(req,res)=>{
     const i=0;

     res.send(

        
       

        


       ' <h1>'+finalWordsArray[0].name+ "   "+finalWordsArray[0].total+'</h1>'

        
     )
})
