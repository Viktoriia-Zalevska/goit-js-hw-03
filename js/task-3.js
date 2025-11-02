/**
 * Функція перевіряє рядок на наявність заборонених слів "spam" або "sale".
 * Перевірка виконується незалежно від регістру.
 * * @param {string} message - Вхідний рядок для перевірки.
 * @returns {boolean} - true, якщо знайдено спам, інше false.
 */
function checkForSpam(message) {
  // 1. Приводимо весь рядок до нижнього регістру для коректного порівняння
  const normalizedMessage = message.toLowerCase();

  // 2. Перевіряємо, чи містить нормалізований рядок заборонені слова
  // Використовуємо логічний оператор АБО (||)
  const includesSpam = normalizedMessage.includes("spam");
  const includesSale = normalizedMessage.includes("sale");

  // 3. Повертаємо true, якщо знайдено хоча б одне заборонене слово
  return includesSpam || includesSale;
}

// Виклики для перевірки ментором

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
