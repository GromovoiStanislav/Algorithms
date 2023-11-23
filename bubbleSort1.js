function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Сравниваем соседние элементы и меняем их местами, если нужно
      if (arr[j] > arr[j + 1]) {
        // Обмен значениями элементов
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Пример использования
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = bubbleSort(unsortedArray.slice()); // Используем .slice(), чтобы не изменять исходный массив

console.log('Неотсортированный массив:', unsortedArray);
console.log('Отсортированный массив:', sortedArray);
