const numbers = {
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
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

module.exports = function toReadable (number) {
    const num = (number + '').split('') 
    if (number === 0) {
        return 'zero'
    }else if (numbers[number]) {
        return numbers[number]
    } else if (num.length < 3) {
        return `${getTwoBitNumber(num)}`
    } else if (num.length < 4) {
        if (num[1] === '0' && num[2] === '0') {
            return `${toReadable(num[0])} hundred`
        } else {
            return `${toReadable(num[0])} hundred ${getTwoBitNumber(num[1] + num[2])}`
        }
    }
}

function getTwoBitNumber(num) {
      if (numbers[num]) {
          return numbers[num]
      } else {
        if (num[0] === '0') {
          return numbers[num[1]]
        } else {
          return`${getTwoBitNumber(num[0] + '0')} ${getTwoBitNumber(num[1])}`
        }
      }
  }