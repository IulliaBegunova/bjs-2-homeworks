function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, i) => {
    return arr1[i] === arr2[i];
  });
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1[i] !== arr2[i]) {
  //     return false;
  //   }
  // }
  // return true;
}

function advancedFilter(arr) {
  return arr.slice().filter(item => {
    return item % 3 === 0 && item > 0;
  }).map(item => item * 10);
}