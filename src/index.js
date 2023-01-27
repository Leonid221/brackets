module.exports = function check(str, bracketsConfig) {
  let obj = Object.fromEntries(bracketsConfig);
  let keyStr = Object.keys(obj);
  let result = [];
  

  for (let i = 0; i < str.length; i++) {
    let currentSimbol = str[i];

    if (keyStr.includes(currentSimbol[i])) {
      result.push(currentSimbol);
    } else {
      if (result.length === 0) {
      return false;
      }

      let topElement = result[result.length - 1];

      if (obj[currentSimbol] === topElement) {
        result.pop();
      } else {
        return false;
      }

    }
  }

  return result.length === 0;
}
