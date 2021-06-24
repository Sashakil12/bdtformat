function bdtFormat(num) {
  if (typeof num !== "number")
    throw new Error("bdtformat: given argument id not a number!");
  num = num.toString();
  let str = "";
  let tail = "";
  if (num.includes(".")) {
    tail = num.split(".")[1];
    num = num.split(".")[0];
  }

  let tr = 4;
  for (let i = num.length - 1; i >= 0; i--) {
    if (i === num.length - tr) {
      str = "," + str;
      tr += 2;
    }
    str = num[i] + str;
  }

  return `${str}${tail && `.${tail}`}`;
}

module.exports = bdtFormat;
