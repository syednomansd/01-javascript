/* Under the hood, map passes three arguments to your callback:

The current item in the array
The array index of the current item
The entire array you called map on */

// Durations are in minutes
const dailyTasks = [
  {
    'name'     : 'Write for Envato Tuts+',
    'duration' : 120
  },
  {
    'name'     : 'Work out',
    'duration' : 60
  },
  {
    'name'     : 'Procrastinate on Duolingo',
    'duration' : 240
  }
];

// Return Task name
const result = dailyTasks.map(task => task.name)

console.log(result);