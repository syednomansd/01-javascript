/* Under the hood, reduce passes your callback four arguments:

The current value
The previous value 
The current index
The array you called reduce on */

const total = [1, 2, 3, 4, 5].reduce(function (prev, cur) {
  return prev + cur;
}, 0);

console.log(total); 