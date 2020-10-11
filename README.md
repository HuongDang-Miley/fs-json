Sometimes when you use a 3rd party API there is a limit on the number of calls you can make.

One hack for testing is to make a call and store the data in a json file. Then you can import and use that data to test your application and save your 3rd party calls until you really need them.

Also, we want to create a formatted address list that we could actually print out and give to a colleague
There will be 4 files. 1 file will be created dynamically.

Use axios and this url: https://jsonplaceholder.typicode.com/users

You will also using the native package fs
You do not need to build a server or create streams
INSTRUCTIONS:
Create a file called addressList.json:
- Leave it empty
Create a file called user.js:
- Write a function that grabs the data from the url and creates a file called addressList.json
- The function should store the data from the url in the addressList.json file
Create a file called addressList.js:
- Write a function that uses the data from addressList.json
- If data does not exist, the function should log ‘There is no data in the file’ in the terminal and stop the program.
- Otherwise, The function should create a file called addressList.txt
- The file should look like the addressList.txt I have provided below under 'Files'

Submit Github repo link
