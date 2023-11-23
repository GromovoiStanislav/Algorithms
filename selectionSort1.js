function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Предполагаем, что минимальный элемент находится на текущей позиции
    let minIndex = i;

    // Поиск минимального элемента в оставшейся части массива
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Обмен значениями текущего элемента с минимальным элементом
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// Пример использования
let unsortedArray = [64, 25, 12, 22, 11];
let sortedArray = selectionSort(unsortedArray.slice()); // Используем .slice(), чтобы не изменять исходный массив

console.log('Неотсортированный массив:', unsortedArray);
console.log('Отсортированный массив:', sortedArray);
