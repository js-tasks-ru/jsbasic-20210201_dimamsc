// создаем новый массив для имен биатлонистов
let fullNames = [];

// создаем 5 карточек (объект) с данными (свойства объекта) биатлонистов
let firstBiathlete = { fullName: "Эдуард Латыпов", worldCupStandings: 22 };
let secondBiathlete = { fullName: "Александр Логинов", worldCupStandings: 18 };
let thirdBiathlete = { fullName: "Карим Халили", worldCupStandings: 61 };
let fourthBiathlete = { fullName: "Кирил Стрельцов", worldCupStandings: 51 };
let fifthBiathlete = { fullName: "Евгений Гараничев", worldCupStandings: 26 };
let sixthBiathlete = { fullName: "Матвей Елисеев", worldCupStandings: 21 };

// создаем массив объектов
let biathletes = [
  firstBiathlete,
  secondBiathlete,
  thirdBiathlete,
  fourthBiathlete,
  fifthBiathlete,
];

// функция для создания массива, в котором будут храниться только имена биатлонистов из объектов
function namify() {
  for (let i = 0; i < biathletes.length; i++) {
    fullNames.push(biathletes[i].fullName);
  }
  console.log(fullNames);
}

// вызов функции
namify();
