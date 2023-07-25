function partition(array, low, high) {
  let pivotIndex = high;
  for (let i= low; i < pivotIndex; i++){

    let curr = array[i]
    let pivot = array[pivotIndex];
    let swap = array[pivotIndex-1];
    
    if (curr >= pivot ){
      array[i] = swap;
      array[pivotIndex] = curr;
      array[pivotIndex -1] = pivot;
      pivotIndex--;
      i--;
    }
    
  }
  return pivotIndex
}

function quicksort(array, low = 0, high = array.length - 1) {
  if (low >= high) return array

  let pivotIndex = partition(array, low, high);
  
  console.log('low', low, 'index', pivotIndex, 'high', high)

  quicksort(array, low, pivotIndex-1);
  quicksort(array, pivotIndex+1, high);
  return array
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [2, 4, 5, 5]");
  console.log(partition([5, 2, 5, 4], 0, 3));

  console.log("");

  console.log("Expecting: [2, 5]");
  console.log(partition([5, 2], 0, 1));
 
  console.log("");
 
  console.log("Expecting: [1, 2, 3, 4]"); 
  console.log(quicksort([3, 2, 1, 4]));

  console.log("");
 
  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));

  console.log("");

  console.log("Expecting: [1, 1, 2, 2, 3, 3]");
  console.log(quicksort([3, 2, 3, 1, 2, 1]));
}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution