function slugify(title) {
  // 1. Приводимо весь рядок до нижнього регістру (вимога 2).
  const lowerCaseTitle = title.toLowerCase();

  // 2. Розбиваємо рядок на масив слів, використовуючи пробіл як роздільник.
  // Завдання гарантує, що слова розділені лише пробілами (вимога 1).
  const words = lowerCaseTitle.split(' ');

  // 3. Об'єднуємо слова масиву назад у рядок, використовуючи тире (-) як роздільник (вимога 3).
  const slug = words.join('-');

  // 4. Повертаємо готовий slug.
  return slug;
}

// Виклики для перевірки коректності роботи

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

