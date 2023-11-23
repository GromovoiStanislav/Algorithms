function fibonacci(n) {
  if (n <= 0) {
    return 'Пожалуйста, введите положительное число для вычисления числа Фибоначчи.';
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    let prevPrev = 0;
    let prev = 1;

    for (let i = 3; i <= n; i++) {
      const current = prev + prevPrev;
      prevPrev = prev;
      prev = current;
    }

    return prev;
  }
}

// Пример использования
let n = 100;
let result = fibonacci(n);
console.log(`Фибоначчи ${n} = ${result}`);
