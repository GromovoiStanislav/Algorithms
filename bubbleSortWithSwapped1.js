function bubbleSortWithSwapped(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Обмен значениями элементов
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Пример использования
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = bubbleSortWithSwapped(unsortedArray.slice()); // Используем .slice(), чтобы не изменять исходный массив

console.log('Неотсортированный массив:', unsortedArray);
console.log('Отсортированный массив:', sortedArray);
