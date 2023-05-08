/* Under the hood, filter passes your callback three arguments:

The current item
The current index
The array you called filter on */

const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
const res = words.filter(word => word.length < 8);
console.log(res);