const axios = require('axios');

const connectToURL = (url)=>{
    const req = axios.get(url);
    console.log(req);
    req.then(resp => {
        let listOfEntries = resp.data.entries;
        listOfEntries.forEach((entry)=> {
            console.log(entry.Category);
        });
    })
    .catch(err=> {
        console.log(err.toString())
    });
}

console.log("before connect URL")
connectToURL('https://api.publicapis.org/entries')
console.log("after connect url")