let minShortProgScore = 95;

let firstPlace = {
  name: "Михаил Коляда",
  age: 22,
  represents: "СШОР Звездный лед",
  coach: "Алексей Николаевич Мишин",
  scored: 261,
  shortProgScore: 101,
  freeProgScore: 160,
};

let secondPlace = {
  name: "Дмитрий Алиев",
  age: 20,
  represents: "СШОР Санкт-Петербург",
  coach: "Евгений Рукавицын",
  scored: 253,
  shortProgScore: 96,
  freeProgScore: 157,
};

let thirdPlace = {
  name: "Александр Самаренко",
  age: 23,
  represents: "СДЮШОР ЦСКА",
  coach: "Светлана Соколовская",
  scored: 250,
  shortProgScore: 94,
  freeProgScore: 156,
};

let figSkatingResults = [firstPlace, secondPlace, thirdPlace];

function showSalary(results, minScore) {
  let namesStr = "";
  let finalNamesStr = "";
  let spesialSymb = "";

  for (let i = 0; results[i].shortProgScore >= minScore; i++) {
    namesStr =
      namesStr + results[i].name + "," + " " + results[i].shortProgScore + "\n";
  }
  finalNamesStr = namesStr.slice(0, -1);
  return finalNamesStr;
}

console.log(showSalary(figSkatingResults, minShortProgScore));
