module.exports = function check(str, bracketsConfig) {
  const bracketsConfigReverse = bracketsConfig.map((item) => {
    if(typeof item === "object") {
      return [...item].reverse();
    }
  });
  let obj = Object.fromEntries(bracketsConfigReverse);
  let open_bracets = Object.values(obj);
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let currentSimbol = str[i];

    if (open_bracets.includes(currentSimbol)) {
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
