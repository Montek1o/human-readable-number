module.exports = function toReadable(number) {
  const first = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
  }
  const second = {
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen',
    0: 'twenty',
  }
  const third = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }
  if (number >= 0 && number <= 10) {
    return first[number];
  }
  if (number > 10 && number < 21) {
    return second[number.toString()[1]];
  }
  if (number > 20 && number < 100 && number.toString()[1] === '0') {
    return third[number.toString()[0]];
  }
  if (number > 20 && number < 100 && number.toString()[1] !== '0') {
    return third[number.toString()[0]] + ' ' + first[number.toString()[1]];
  }
  if (number > 99 && number < 1000 && number.toString()[1] === '0' && number.toString()[2] === '0') {
    return first[number.toString()[0]] + ' hundred';
  }
  if (number > 99 && number < 1000 && number.toString()[1] === '0' && number.toString()[2] !== '0') {
    return first[number.toString()[0]] + ' hundred ' + first[number.toString()[2]];
  }
  if (number > 99 && number < 1000 && number.toString()[1] === '1' && number.toString()[2] === '0') {
    return first[number.toString()[0]] + ' hundred ten';
  }
  if (number > 99 && number < 1000 && number.toString()[1] === '1') {
    return first[number.toString()[0]] + ' hundred ' + second[number.toString()[2]];
  }
  if (number > 99 && number < 1000 && number.toString()[2] === '0') {
    return first[number.toString()[0]] + ' hundred ' + third[number.toString()[1]]
  }
  if (number > 99 && number < 1000) {
    return first[number.toString()[0]] + ' hundred ' + third[number.toString()[1]] + ' ' + first[number.toString()[2]];
  }
}
