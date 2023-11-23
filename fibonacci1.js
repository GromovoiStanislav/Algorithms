function fibonacci(n) {
  if (n <= 0) {
    return 'Пожалуйста, введите положительное число для вычисления числа Фибоначчи.';
  } else {
    const sequence = new Array(n);
    sequence[0] = 0;
    sequence[1] = 1;

    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[n - 1];
  }
}

// Пример использования
let n = 100;
let result = fibonacci(n);
console.log(`Фибоначчи ${n} = ${result}`);
