export const InsertionSort = (inputArray) => {
  for (var i = 0; i < inputArray.Length - 1; i++) {
    for (var j = i + 1; j > 0; j--) {
      if (inputArray[j - 1] > inputArray[j]) {
        var temp = inputArray[j - 1];
        inputArray[j - 1] = inputArray[j];
        inputArray[j] = temp;
      }
    }
  }
  return inputArray;
};

export const selectionSort = (array) => {
  var size = array.length;
  for (var step = 0; step < size - 1; step++) {
    var min_idx = step;
    for (var i = step + 1; i < size; i++) {
      // To sort in descending order, change > to < in this line.
      // Select the minimum element in each loop.
      if (array[i] < array[min_idx]) {
        min_idx = i;
      }
    }
    // put min at the correct position
    var temp = array[step];
    array[step] = array[min_idx];
    array[min_idx] = temp;
  }
};

export const sortMax = (arr) =>{
    arr.sort(function(a, b){return a.discountedPrice - b.discountedPrice})
}
