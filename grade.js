const marks = [80, 80, 50];

// Average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let sum = 0;
  for (val of marks)
    sum += val;
  let average = sum / marks.length;
  
  if(average < 60) return 'F'
  if(average < 70) return 'D'
  if(average < 80) return 'C'
  if(average < 90) return 'B'
  return 'A'
}