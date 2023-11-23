function bubbleSortWithSwapped(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }
}

const arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSortWithSwapped(arr);
console.log(arr);
