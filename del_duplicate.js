


function del_duplicate(prop) {
   
    let map = new Map()  // key:deduplication_id  value: priority  timestamp
    let del = new Set()  // store duplicate item. since it assumes that the timestamps will never be identical, use timestamps as key
    for (i in prop) {

        if (!map.has(prop[i].deduplication_id)) {
            map.set(prop[i].deduplication_id, {priority: prop[i].priority, timestamp: prop[i].timestamp})
        } else {
            if (prop[i].priority > map.get(prop[i].deduplication_id).priority) {
                del.add(map.get(prop[i].deduplication_id).timestamp)
                map.set(prop[i].deduplication_id, {priority: prop[i].priority, timestamp: prop[i].timestamp})
            } else if (prop[i].priority == map.get(prop[i].deduplication_id).priority) {
                if (prop[i].timestamp > map.get(prop[i].deduplication_id).timestamp) {
                    //latter: bigger
                    del.add(map.get(prop[i].deduplication_id).timestamp)
                    map.set(prop[i].deduplication_id, {priority: prop[i].priority, timestamp: prop[i].timestamp})
                } else {
                    del.add(prop[i].timestamp)
                }
            } else {
                del.add(prop[i].timestamp)
            }
        }
    }

    for (var i = 0; i < prop.length;) {
        if (del.has(prop[i].timestamp)) {
            console.log("which timestamp that need to delete")
            console.log(prop[i].timestamp) //List the timestamp that needs to be deleted
            prop.splice(i, 1)
        } else {
            i++
        }
    }
}





const fs = require('fs');
const input = './del_test2.json';
// const input = './del_test1.json';
// const input = './notifications_new.json';
const output = './result2.json';

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
del_duplicate(file)
console.log(file)  //  Recommend to check the results



fs.writeFile(output, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    // console.log(JSON.stringify(file));
    console.log('writing to ' + output);
  });
  






