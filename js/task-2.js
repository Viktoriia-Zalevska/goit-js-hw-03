/**
 * Функція форматує рядок: обрізає його до maxLength і додає трикрапку,
 * якщо рядок перевищує максимальну довжину.
 * @param {string} message - Вхідний рядок.
 * @param {number} maxLength - Максимально допустима довжина рядка.
 * @returns {string} - Обрізаний або початковий рядок.
 */
function formatMessage(message, maxLength) {
  // Перевіряємо довжину рядка
  if (message.length <= maxLength) {
    // Якщо довжина в межах ліміту, повертаємо початковий рядок
    return message;
  } else {
    // Якщо довжина перевищує ліміт, обрізаємо рядок
    // і додаємо трикрапку "..."

    // Використовуємо метод .slice() для обрізання до maxLength символів
    const trimmedMessage = message.slice(0, maxLength);

    return trimmedMessage + "...";
  }
}

// Приклади перевірки роботи функції

//  Рядок не обрізається (довжина 18 <= 25)
console.log(formatMessage("Curabitur ligula sapien", 25));
// Очікуваний результат: "Curabitur ligula sapien"

//  Рядок не обрізається (довжина 20 <= 20)
console.log(formatMessage("Curabitur ligula sapien", 20));
// Очікуваний результат: "Curabitur ligula sapie..." (якщо max-length 20, то обрізається)

// Виклики для перевірки коректності роботи

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
