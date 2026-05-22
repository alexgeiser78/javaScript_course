let year = 2000;
let result;

function isLeapYear(year){
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    return year + " is a leap year."
  else
    return year + " is not a leap year."

}

//console.log(year % 4 === 0);
//console.log(year % 100 !== 0);
//console.log(year % 400 !== 0);
result = isLeapYear(year);
console.log(result);

