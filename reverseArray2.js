function reverseArray(arr) {
  let n = arr.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    // Индекс элемента, который находится на противоположной стороне от текущего элемента
    let oppositeIndex = n - 1 - i;

    // Обмен значениями элементов
    let temp = arr[i];
    arr[i] = arr[oppositeIndex];
    arr[oppositeIndex] = temp;
  }

  return arr;
}

// Пример использования
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(originalArray.slice()); // Используем .slice(), чтобы не изменять исходный массив

console.log('Исходный массив:', originalArray);
console.log('Реверсированный массив:', reversedArray);
