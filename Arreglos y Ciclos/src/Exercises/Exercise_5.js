export {updatePeopleList};
/**
 * Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */


function updatePeopleList() {
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
let originalPeople = [...people];

// 1. Print all the array
console.log(originalPeople); // "Maria", "Dani", "Luis", "Juan", "Camila"
// 2. Erase Dani
people.splice(1,1); // dani'nt
// 3. Erase Juan
people.splice(2,1); // "Maria", "Luis", "Juan", "Camila" --> juan'nt
// 4. Move Luis at the beggining
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);
// 5. Add my name at the end
people.push("Abril"); //"Maria", "Juan", "Camila", "Abril" --> Luis'nt
// Find Maria and break
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  };
};
//6. Find Maria's index
console.log(people.indexOf("Maria"));
// 7. Print final array
console.log(people);
};

console.log(updatePeopleList());