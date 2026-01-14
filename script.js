function mincost(arr)
{ 
//write your code here
// return the min cost
  if (arr.length <= 1) return 0;

  let cost = 0;

  // Sort array in ascending order
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    // Take two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // Insert the combined rope back
    arr.push(sum);

    // Re-sort to maintain order
    arr.sort((a, b) => a - b);
  }

  return cost;
}



module.exports=mincost;
