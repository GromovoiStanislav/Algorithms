function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

const arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);
console.log(arr);

///////////////////////////////////////

function bubbleSort2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (const [j, element] of arr.entries()) {
      if (j < arr.length - i - 1 && element > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

const arr2 = [5, 2, 4, 1, 3];
bubbleSort2(arr2);
console.log(arr2);
