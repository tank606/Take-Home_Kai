


function convert(prop) {
    for (i in prop) {
        prop[i]["timestamp"] = new Date(prop[i].datestring).getTime()
        delete prop[i].datestring;
        
        var prirority_new = -1;
        if (prop[i].priority == "HIGH") {
            prirority_new = 2
        } else if (prop[i].priority == "MID") {
            prirority_new = 1
        } else if (prop[i].priority == "LOW") {
            prirority_new = 0
        }
        delete prop[i].priority;
        prop[i]["priority"] = prirority_new;
        var str = prop[i].msg.split(":")
        prop[i]["body"] = str[0]
        prop[i]["title"] = str[1]
        
        const temp = prop[i].deduplication_id

        delete prop[i].deduplication_id;
        delete prop[i].msg;
    
        prop[i]["deduplication_id"] = temp
    }
}


const fs = require('fs');
const input = './notifications_old.json';
const output = './result1.json';

// check the input
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
convert(file)
console.log(file)  //Recommend to check the results


fs.writeFile(output, JSON.stringify(file), function writeJSON(err) {
  if (err) return console.log(err);
//   console.log(JSON.stringify(file));
  console.log('writing to ' + output);
});
