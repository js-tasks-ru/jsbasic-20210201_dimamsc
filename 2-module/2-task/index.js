let schedule = {
  //colorRed: "red",
  //colorGreen: "gren",
};

let count = 0;

//console.log(value.this);

function isEmpty(obj) {
  for (let key in obj) {
    count++;
  }
  if (count == 0) {
    console.log(false);
  } else {
    console.log(true);
  }
}

isEmpty(schedule);
