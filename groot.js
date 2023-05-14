// Recursion - subsequence method.
// Assumption - in pies array, we will surely have one such cobination of sweetness which groot can consume.

function findPies(pies, sweetness){
  // using subsequence to get all consumable cobination in an array.
  let ans = subsequence([],pies,sweetness,[])

  // we need to return any one consumable combination, so return indices corresponding to first cobination recieved in ans.
  ans = ans[0];

  // finding indices to first combination from pies array.
  ans = ans.map((el) => pies.indexOf(el))

  // retunr answer
  return ans;
  
}

// subsequence function, to generate all possible combinations
function subsequence(p,up,sweetness,ans) {
  if(up.length <= 0){
    let sum = p.reduce((a,b) => a+b,0);
    if(sum===sweetness) ans.push([...p])
    return sum;
  }

  let el = up[0];

  subsequence([...p,el], up.slice(1),sweetness,ans); // including current element
  subsequence(p, up.slice(1),sweetness,ans); // not including current element
  return ans; // returning all consumable cobinations
}


let ans = findPies([1, 2, 3, 2, 1], 6)
console.log("ans: ",ans)

ans = findPies([8, 4, 3, 2, 6, 5], 6)
console.log("ans: ",ans)

ans = findPies([1,3,5], 6)
console.log("ans: ",ans)