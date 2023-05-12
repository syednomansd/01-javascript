/* Falsey values are: 

1. undefined
2. null
3. ''
4. false
5. 0
6. NaN */

const array = [0, null, undefined, '', 2, 3]; // 2
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (value of array)
    if(value)
      count++;
  return count;
}