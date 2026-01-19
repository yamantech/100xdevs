//The async and await syntax in JavaScript provides a way to write 
// asynchronous code that looks and behaves like synchronous code,
//  making it easier to read and maintain

/*********************************************************************** */

// Example (Avoiding callback hell )
// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

/*
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function taskInOrder(){
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hello there");
}
taskInOrder();

*/


/*********************************************************************** */
// Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file


//callback approach
/*
const fs = require("fs");
function cleanFile() {
    fs.readFile('try.txt', 'utf-8', (err, data) => {
        let trimedText = data.trim();
        fs.writeFile('try.txt', trimedText, ((err) => {
            if (err) {
                console.log("Error while writing file");
            }
            else {
                console.log("Writed down the file");
            }
        }))
    })
}
 cleanFile();
 
*/

/****************************************************************************** */

// promise with async approach
const fs = require('fs');
function cleanFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                let trimedText = data.trim();
                fs.writeFile(filename, trimedText, ((err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                }))
            }

        })
    })
}

async function main() {
    await cleanFile('try.txt');
    console.log("File read,trimed and write sucessfull!!!");
}
main();

