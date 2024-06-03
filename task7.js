// Task 7: Improving code quality

function processNames(names) {
  let result = [];
  for (let name of names) {
    let upperCaseName = name.toUpperCase().split(" ").join("_");
    result.push(upperCaseName);
  }
  return result;
}

const namesArray = ["john doe", "jane smith", "alice jones"];
console.log(processNames(namesArray));
