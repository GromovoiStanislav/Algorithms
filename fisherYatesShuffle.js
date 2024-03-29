/*Тасование Фишера — Йетса или Тасование Кнута
  — это алгоритм создания случайных перестановок конечного множества*/

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    // let t = array[i]; array[i] = array[j]; array[j] = t
  }
}

// подсчёт вероятности для всех возможных вариантов
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

/* Пример вывода:
123: 166693
132: 166647
213: 166628
231: 167517
312: 166199
321: 166316 */

//////////////////////////
//А можно так:
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
