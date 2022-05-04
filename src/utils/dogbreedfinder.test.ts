import { dogbreedfinder } from "./dogbreedfinder";

test("dbf pulls a dog breed from the given URL", () => {
  expect(dogbreedfinder("https://images.dog.ceo/breeds/australian-shepherd/leroy.jpg")).toBe("australian-shepherd");
  expect(dogbreedfinder("https://images.dog.ceo/breeds/terrier-lakeland/n02095570_1283.jpg")).toBe("terrier-lakeland");
  expect(dogbreedfinder("https://images.dog.ceo/breeds/terrier-american/n02093428_4939.jpg")).toBe("terrier-american");
});
