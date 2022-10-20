//Which array method would I need to find the total number of items in my basket?
//Which array method would I need to see if there are "Grapes" in my basket?
//Which array method would I need to get a list of all the item names in my basket?
//Which array method would I need to find all the items over £1 in my basket?
//Ask the trainees to write the code to pass their tests for each task.
const basket = [
  { name: "Apple", priceInPence: 50, quantity: 4 },
  { name: "Orange", priceInPence: 80, quantity: 2 },
  { name: "Carrots", priceInPence: 20, quantity: 10 },
  { name: "Strawberries", priceInPence: 150, quantity: 1 },
];

export function totalNumber(basketList) {
  let totalNumber = basketList.reduce((acc, item) => acc + item.quantity, 0);
  //logger.info(totalNumber);
  return totalNumber;
}
console.log(totalNumber(basket));

export function findItem(basketList) {
  const basketIncludes = basketList.includes("Grapes");
  return basketIncludes;
}
console.log(findItem(basket));

export function listItem(basketList) {
  let listOfString = "";
  basketList.forEach((item) => {
    listOfString += `${item.quantity} ${item.name},`;
  });

  return listOfString.slice(0, -1);
}
console.log(listItem(basket));

export function findFilteredItems(basketList) {
  //   const findFilteredItems = basket.filter((item) => {
  //     return item.priceInPence > 100;
  //   });

  const findFilteredItems = basketList.reduce((acc, item) => {
    if (item.priceInPence > 100) return acc + item.name;
    return acc;
  }, "");
  return findFilteredItems;
}
console.log(findFilteredItems(basket));
