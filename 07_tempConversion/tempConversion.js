const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * (5/9)
  cTemp = +(Math.round(cTemp + "e+1")  + "e-1");
  return cTemp;
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = (cTemp * 9/5) + 32
  fTemp = +(Math.round(fTemp + "e+1")  + "e-1");
  return fTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
