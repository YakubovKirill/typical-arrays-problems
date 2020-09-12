
exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length === 0) return 0;
  let minElem = array[0];
  array.forEach(element => {
    (element < minElem) ? minElem = element : minElem;
  });
  return minElem;
}

exports.max = function max (array) {
  if (typeof array === 'undefined' || array.length === 0) return 0;
  let maxElem = array[0];
  array.forEach(element => {
    (element > maxElem) ? maxElem = element : maxElem;
  });
  return maxElem;
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length === 0) return 0;
  let summ = 0;
  array.forEach(element => {
    summ += element
  });
  return summ / array.length;
}
