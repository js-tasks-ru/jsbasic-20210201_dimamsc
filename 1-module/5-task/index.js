/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */

let lengthStr = str.length;

 function truncate(str, maxlength) {
  if ( lengthStr > maxlength ) {
    return str.slice(0, maxlength);
  } else {
    return str;
  }
}

truncate("Василий", 10);
