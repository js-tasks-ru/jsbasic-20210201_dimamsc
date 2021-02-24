/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
    let lengthStr = str.length;
    if (lengthStr > maxlength) {
        return str.slice(0, maxlength);
    } else {
        return str;
    }
}

let newString = truncate("Василий", 10);
console.log(newString);