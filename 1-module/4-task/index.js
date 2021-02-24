let trueOrFalse;

function checkSpam(str) {
  if (str.includes("1xBet") || str.includes("XXX")) {
    trueOrFalse = true;
  } else {
    trueOrFalse = false;
  }
  console.log(trueOrFalse);
}

checkSpam("fXXXfsdfs1xBet");
