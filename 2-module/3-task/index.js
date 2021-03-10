let sum;
let multi;

let calculator = {
  newPropertyForObject: (newPropertyFunction = function () {
    a = +prompt("Введите первое значение", "");
    b = +prompt("Введите второе значение", "");
    calculator.valueA = a;
    calculator.valueB = b;
  }),
  sumValues: (sumValuesFunction = function () {
    sum = calculator.valueA + calculator.valueB;
    alert("Сумма чисел:" + " " + sum);
  }),
  multiValues: (multiValuesFunction = function () {
    multi = calculator.valueA * calculator.valueB;
    alert("Произведение чисел:" + " " + multi);
  }),
};

newPropertyFunction();
sumValuesFunction();
multiValuesFunction();

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
