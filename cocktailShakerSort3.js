function cocktailShakerSort(arr) {
  let swapped = true;
  let left = 0;
  let right = arr.length - 1;

  while (swapped) {
    swapped = false;

    for (let i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }

    swapped = false;

    for (let i = right; i > left; i--) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
  }
}

const arr = [5, 2, 4, 1, 3];
cocktailShakerSort(arr);
console.log(arr);
