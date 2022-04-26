function bdtFormat(num) {
  if (typeof num !== "number")
    throw new Error("bdtformat: given argument is not a number!");
  if (num > Number.MAX_SAFE_INTEGER) {
    throw new Error(
      "bdtformat: Provided number value is too big! I can handle upto 16 digits! Sorry!!"
    );
  }
  let isNeg = false;
  if(num<0){
    isNeg = true
  }
  num = num.toString();
  let str = "";
  let tail = "";
  
  if (num.includes(".")) {
    tail = num.split(".")[1];
    num = num.split(".")[0];
  }
  if(isNeg){
    num = num.substr(1)
  }  
  let tr = 4;
  for (let i = num.length - 1; i >= 0; i--) {
    if (i === num.length - tr) {
      str = "," + str;
      tr += 2;
    }
    str = num[i] + str;
  }
  if (str.startsWith(",")) str.substr(1);
  return `${isNeg?"-":""}${str}${tail && `.${tail}`}`;
}

module.exports = bdtFormat;
