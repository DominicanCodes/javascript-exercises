const removeFromArray = function(arr, ...args) {

    // console.log(item)
    // console.log(arr.indexOf(item))
    // console.log(arr.splice(arr.indexOf(item), 1))
    // arr.splice(arr.indexOf(item), 1)
    // console.log(arr)
    
    // return arr
    return arr.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
