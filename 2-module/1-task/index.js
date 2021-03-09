let salaries = {
    John: 1000,
    Ann: 1600,
    Pete: 1300,
    month: "December",
    currency: "USD",
    isPayed: false,
    result1: 7 / 0,
    result2: -7 / 0,
    other: NaN,
};

let sum = 0;
let typeOfValue;
let valueInSalaries;

function sumSalary(salaries) {
    for (valueOfSalaries in salaries) {
        typeOfValue = typeof salaries[valueOfSalaries];
        valueInSalaries = salaries[valueOfSalaries];
        if (
            valueInSalaries == Number.POSITIVE_INFINITY ||
            valueInSalaries == Number.NEGATIVE_INFINITY
        ) {} else if (isNaN(valueInSalaries) == true && typeOfValue == "number") {} else if (typeOfValue == "number") {
            sum = sum + valueInSalaries;
        } else {}
    }
    console.log(sum);
}

sumSalary(salaries);