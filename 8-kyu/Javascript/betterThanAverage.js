// 8 kyu
// How good are you really?
// https://www.codewars.com/kata/5601409514fc93442500010b

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!

// 1. Find sum of all points by using reduce function and classPoints array
// 2. Find total number of students and add yourself as you were not included in the array
// 3. Find avg score by diving total sum by the count of students
// 4. Compare scores and return boolean value
function betterThanAverage(classPoints, yourPoints) {
    const totalPoints = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const numberOfStudents = classPoints.length + 1;
    const averageScore = (totalPoints + yourPoints) / numberOfStudents;
    return yourPoints > averageScore;
  }
