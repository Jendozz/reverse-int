module.exports = function reverse (n) {
  let result ="";
  let strnum  = String(n).split("");
  strnum = strnum.reverse();
  let reverseNumber = strnum.toString();
  for (let i = 0; i < reverseNumber.length; i++)
  {
    if (reverseNumber[i] === "," || reverseNumber[i] === "-" ) {}
    else {
        result += reverseNumber[i];
    }
  }
  result = Number(result)
  return result;
}
