function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Проверка работы функции
console.log(getShippingMessage("USA", 100, 20)); // "Shipping to USA will cost 120 credits"
console.log(getShippingMessage("Germany", 200, 50)); // "Shipping to Germany will cost 250 credits"
console.log(getShippingMessage("Japan", 150, 30)); // "Shipping to Japan will cost 180 credits"
