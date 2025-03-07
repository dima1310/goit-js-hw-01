function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2; // Учитываем паддинг с двух сторон
  const borderWidth = parseFloat(border) * 2; // Учитываем бордер с двух сторон

  return contentWidth + paddingWidth + borderWidth;
}

// Проверка работы функции
console.log(getElementWidth("200px", "10px", "2px")); // 224
console.log(getElementWidth("300px", "20px", "5px")); // 350
console.log(getElementWidth("100.5px", "15.5px", "3px")); // 138.5
