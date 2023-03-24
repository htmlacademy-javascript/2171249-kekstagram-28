const isLessOrEqual = function (string, length) {
  if (string.length <= length) {
    return true;
  }
  return false;
};

isLessOrEqual('проверяемая строка', 20);


const isPalindrom = function (string) {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

isPalindrom('слон');


const extractNumber = function (string) {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber('2023 год');

const myPadstart = function (string, minLength, pad) {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadstart('q', 4, 'werty');
