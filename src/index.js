
exports.min = function min (array=[]) {
  const arr = array.sort((x,y) => x-y)
  return arr[0] || 0;
}

exports.max = function max (array=[]) {
  const arr = array.sort((x,y) => x-y)
  return arr[array.length-1] || 0;
}

exports.avg = function avg (array=[]) {
  const sum = array.reduce((summa,digit) => summa + digit,0)
  return sum / array.length || 0;
}
