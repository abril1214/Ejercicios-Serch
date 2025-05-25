export {getCommonCourses};
/**
 * 
Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

const getCommonCourses = ()=>{
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourses = [];

for (let i = 0; i < student1Courses.length; i++) {
  let course = student1Courses[i];

  if (student2Courses.includes(course)) {
    commonCourses.push(course);
  }
} return commonCourses;
};
console.log(getCommonCourses()); // ['Programming']