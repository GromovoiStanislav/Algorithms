function cocktailShakerSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    // Проход слева направо
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Обмен значениями элементов
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // Если не было обменов, массив уже отсортирован
    if (!swapped) break;

    // Проход справа налево
    for (let k = n - 2; k >= 0; k--) {
      if (arr[k] > arr[k + 1]) {
        // Обмен значениями элементов
        let temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
        swapped = true;
      }
    }

    // Если не было обменов после прохода справа налево, массив уже отсортирован
    if (!swapped) break;
  }

  return arr;
}

// Пример использования
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = cocktailShakerSort(unsortedArray.slice()); // Используем .slice(), чтобы не изменять исходный массив

console.log('Неотсортированный массив:', unsortedArray);
console.log('Отсортированный массив:', sortedArray);
