const repeatString = function(str, multiplier) {
let repeatStr = '';

    if (multiplier < 0)
        repeatStr = 'ERROR';

    while (multiplier > 0){
        repeatStr += str;
        multiplier--;
    }

return repeatStr
};

// Do not edit below this line
module.exports = repeatString;
