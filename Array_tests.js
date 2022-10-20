import {
  assertEquals,
  assertStringIncludes,
} from "https://deno.land/std/testing/asserts.ts";

import {
  totalNumber,
  findItem,
  listItem,
  findFilteredItems,
} from "./Arrays.js";

//Which array method would I need to find the total number of items in my basket?
//Which array method would I need to see if there are "Grapes" in my basket?
//Which array method would I need to get a list of all the item names in my basket?
//Which array method would I need to find all the items over £1 in my basket?

const basket = [
  { name: "Apple", priceInPence: 50, quantity: 4 },
  { name: "Orange", priceInPence: 80, quantity: 2 },
  { name: "Carrots", priceInPence: 20, quantity: 10 },
  { name: "Strawberries", priceInPence: 150, quantity: 1 },
];

Deno.test("totalNumber(): total Sum of basket", () => {
  assertEquals(totalNumber(basket), 17);
});

Deno.test("findItem(): find item in basket", () => {
  assertEquals(findItem(basket), false);
});

Deno.test("listItem(): list items of basket", () => {
  assertEquals(listItem(basket), "4 Apple,2 Orange,10 Carrots,1 Strawberries");
});

Deno.test(
  "findFilteredItems(): find items in basket based on condition",
  () => {
    assertEquals(findFilteredItems(basket), "Strawberries");
  }
);
