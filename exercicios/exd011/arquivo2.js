function convertToUpperCase(input) {
  return input.toLocaleUpperCase();
}

function convertToLowerCase(input) {
  return input.toLocaleLowerCase();
}

function restoreSpaces(input) {
  return input.replaceAll('-', ' ');
}

function isSubstring(phrase, part) {
 return phrase.includes(part);
};
