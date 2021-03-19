let str = "Сегодня-прекрасное-солнечное-и-замечательное-утро";
let arrSeparate = [];

function camelize(str) {
  let upLetter;
  let newStr = "";
  arrSeparate = str.split("-");
  for (let i = 0; i < arrSeparate.length; i++) {
    upLetter = arrSeparate[i].charAt(0).toUpperCase() + arrSeparate[i].slice(1);
    newStr = newStr + upLetter;
  }
  return newStr;
}

console.log(camelize(str));
