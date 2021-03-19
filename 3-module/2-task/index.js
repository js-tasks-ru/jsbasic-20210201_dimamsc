let numsArr = [150, 120, 200, 350, 470, 290, 170, 1200, 900];
let equalElements = [];
let unequalElements = [];
let a = 100;
let b = 470;

function findElements(arr, a, b) {
  for (let i = 0; numsArr.length > i; i++) {
    if (numsArr[i] == a || numsArr[i] == b) {
      equalElements.push(numsArr[i]);
    } else if (numsArr[i] > a && numsArr[i] < b) {
      unequalElements.push(numsArr[i]);
    } else {
    }
  }
  console.log(equalElements);
  console.log(unequalElements);
}

findElements(numsArr, a, b);
