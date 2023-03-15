const axios = require('axios');

const connectToURL = async (url) => {
    const outcome = axios.get(url);

    
        let listOfEntries = (await outcome).data.entries;
        listOfEntries.forEach((entry)=> {
            console.log(entry.Category);
        });
    
   
}

console.log("before connect url");
connectToURL('https://api.publicapis.org/entries');
console.log("after connect url");