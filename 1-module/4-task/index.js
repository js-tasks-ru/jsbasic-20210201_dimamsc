let trueOrFalse;

function checkSpam(str) {
  if (str.includes("1XbeT") || str.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam("1XbeT now"));
