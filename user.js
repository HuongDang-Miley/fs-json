const axios = require('axios')
const fs = require('fs')
const url = 'https://jsonplaceholder.typicode.com/users'
axios.get(url)
// Convert url to string and format it
    .then((data) => {
        return JSON.stringify(data.data, null, 4)
    })
// Write the format string above to addressList.json    
    .then((str) => {
        fs.writeFile('addressList.json', str, (err) => {
            if (err) throw err;
            console.log('copy url to addressList.json')
        })
    })

