const fs = require('fs')

// read addressList.js, if data does not exist print error
fs.readFile('addressList.json', 'utf8', (err, info) => {
    // if no data throw error
    if (err) throw err;
    // convert json file to array
    const userArr = JSON.parse(info)
    // loop through array, append the data needed to addressList.txt
    userArr.forEach(({
        name,
        address: {
            street,
            suite,
            city,
            zipcode
        },
        phone,
        email,
    }) => {
        fs.writeFile('addressList.txt', `
*****************
* Address List: *
*****************
        `, (err) => {
            if (err) throw err;
            fs.appendFile('addressList.txt', `
${name}
Address: ${street} ${suite}
            ${city} ${zipcode}  
Phone:   ${phone}                 
Email:   ${email}                 
            \n`, (err) => {
                if (err) throw err
                console.log('wrote users to file')
            })
        })

    })
})
