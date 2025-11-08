function makeArray(firstArray, secondArray, maxLength) {
  // 1. Створення нового масиву шляхом об'єднання двох вхідних масивів.
  // Використовуємо оператор спред (...) для створення нової, "плоскої" копії.
  const newArray = [...firstArray, ...secondArray];

  // 2. Перевірка довжини.
  if (newArray.length > maxLength) {
    // Якщо довжина перевищує maxLength, обрізаємо масив до maxLength елементів.
    // Використовуємо метод slice(0, maxLength), щоб повернути КОПІЮ масиву.
    return newArray.slice(0, maxLength);
  }

  // 3. В іншому випадку повертаємо весь новий масив.
  return newArray;
}

// Перевірки (з вихідних даних завдання)

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Ajax", "Chelsea"], ["Poly", "Houston"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
