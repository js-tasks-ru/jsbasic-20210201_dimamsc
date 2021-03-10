let biathlonistMisses =
    "Эдуард Латыпов 2 промаха на лежке, 2 - на стойке; 3 и 0 промахов у Александра Логинова, все промахи: 2, 1, 3, 0. У остальных промахи: 2 2 4 1. Оценка выступления команды: -2.5 балла";

let objNums = {};
let transform;
let minValue;
let maxValue;
let arrayNumbers = [];

function getMinMax(str) {
    arrElements = biathlonistMisses.split(" ");
    let newString = arrElements.join(" ");
    arrElements2 = newString.split(" ");

    function funcIsNan() {
        for (let i = 0; i < arrElements2.length; i++) {
            transform = +arrElements2[i];
            if (isNaN(transform) == false) {
                arrayNumbers.push(transform);
            }
            maxValue = Math.max.apply(null, arrayNumbers);
            minValue = Math.min.apply(null, arrayNumbers);
        }
    }
    funcIsNan();

    objNums.min = minValue;
    objNums.max = maxValue;
    console.log(objNums);
}

getMinMax(biathlonistMisses);
