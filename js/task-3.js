function filterArray(numbers, value) {
  // 1. Створюємо порожній масив для зберігання результатів.
  const filteredNumbers = [];

  // 2. Використовуємо цикл for...of для ітерації по кожному елементу масиву numbers.
  for (const number of numbers) {
    // 3. Перевіряємо, чи поточний елемент більший за задане значення (value).
    if (number > value) {
      // Якщо умова виконується, додаємо число до нового масиву.
      filteredNumbers.push(number);
    }
  }

  // 4. Повертаємо новий масив із підходящими числами.
  return filteredNumbers;
}

// Перевірки (з вихідних даних завдання)

console.log(filterArray([1, 2, 3, 4, 5], 3));    // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4));    // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5));    // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]