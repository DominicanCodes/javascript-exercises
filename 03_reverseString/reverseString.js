const reverseString = function(str) {
let reversed = '';

   for(i=str.length;i>=0;--i)
    reversed += str.charAt(i);

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
