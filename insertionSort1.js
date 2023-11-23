function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    // Сохраняем текущий элемент для вставки
    let currentElement = arr[i];

    // Сравниваем текущий элемент с предыдущими отсортированными элементами
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Вставляем текущий элемент в правильную позицию
    arr[j + 1] = currentElement;
  }

  return arr;
}

// Пример использования
let unsortedArray = [5, 2, 4, 6, 1, 3];
let sortedArray = insertionSort(unsortedArray.slice()); // Используем .slice(), чтобы не изменять исходный массив

console.log('Неотсортированный массив:', unsortedArray);
console.log('Отсортированный массив:', sortedArray);
