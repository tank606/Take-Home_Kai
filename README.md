# Prerequisite
Install node.js

# Run
node convert.js  
node del_duplicate.js  
node sort.js  

# Test
change input name in the corresponding code  

convert.js:   
notification_old: overall test  


del_duplicate.js:  
del_test1:  If two notifications share a deduplication_id, the one with the higher (numeric) priority should be kept.  
del_test2: In the case of identical priorities, use the later timestamp.  
notifications_new: overall test  

sort.js:  
sort_test1: all timestamp is unique  
sort_test1: If the timestamps match identically, it depends on priorities.  
notifications_new_sort_test: overall test  


# Result
In order to better compare the results， the test result of each function will be saved in the corresponding file, like the result of convert.js is saved on result1.json. 

It is recommended to use console.log(file) to check json at the end of each function. This format is more friendly.