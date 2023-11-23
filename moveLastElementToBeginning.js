let arr = [1, 2, 3, 4, 5];

// Сохраняем последний элемент
let lastElement = arr[arr.length - 1];

// Сдвигаем остальные элементы вправо
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}

// Помещаем последний элемент в начало
arr[0] = lastElement;

console.log('После перемещения:', arr);
