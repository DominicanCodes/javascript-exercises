const sumAll = function(start, end) {
    let sum=0;

    console.log(typeof(start) + '--' + typeof(end))
    // console.log(isNaN(start) 
    // || isNaN(end))
    if (start > end){
        let temp = end;
        end = start;
        start = temp;
    } else if (start < 0 
        || end < 0 
        || isNaN(start) || isNaN(end)
        || typeof(start) !== 'string'
        || typeof(end) !== 'string') {
        return 'ERROR';
    }


    for (i=start; i <= end; i++)
        sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
