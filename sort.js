
function GetSortOrder(prop1, prop2) {    
    return function(a, b) {    
        if (a[prop1] > b[prop1]) {    
            return 1;    
        } else if (a[prop1] < b[prop1]) {    
            return -1;    
        } else {
            if (a[prop2] > b[prop2]) {
                return -1;
            } else if (a[prop2] < b[prop2]) {
                return 1;
            }
            return 0;
        }
           
       
    }    
}  

const fs = require('fs');
const input = './sort_test2.json';
// const input = './sort_test1.json';
// const input = './notifications_new_sort_test.json';
const output = './result3.json';


fs.readFile(input, 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return
    }
    try {
        const temp = JSON.parse(jsonString)
        // console.log(temp)
    } catch(err) {
        console.log('Error parsing JSON string:', err)
    }
})
console.log('Input is ' + input);
const file = require(input);

file.sort(GetSortOrder("timestamp", "priority"));
console.log(file) //Recommend to check the results


fs.writeFile(output, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    // console.log(JSON.stringify(file));
    console.log('writing to ' + output);
  });
