// brute force - subarrays
function findPies(pies, sweetness) {
  let N = pies.length;

  // iterating each pie
  for (let i = 0; i < N; i++) {
    // if sweetness of pie is equal to desired sweetness, return index
    if (pies[i] === sweetness) return [i];

    // else, generating all subarrays in temp
    let temp = [];
    let index = [];
    for (let j = i; j < N; j++) {
      temp.push(pies[j]); // subarray of pie sweetness value
      index.push(j); // subarray of corresponding indices

      // sum of current pie subarray
      let sum = temp.reduce((a, b) => a + b, 0);

      // if sum of current subarray is equal to desired sweetness, return corresponding indices, else continue checking
      if (sum === sweetness) {
        return index;
      }
    }
  }
}

let ans = findPies([8, 4, 3, 2, 6, 5], 6);
console.log(ans);
ans = findPies([1, 2, 3, 2, 1], 6);
console.log(ans);
