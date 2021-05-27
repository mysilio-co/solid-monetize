import { getPaymentPointer } from '../src/'

describe("getPaymentPointer", () => {
  test("fetches and returns a payment pointer", async () => {
    expect(getPaymentPointer("https://travis.myunderstory.com/profile/card#me")).
      resolves.toBe("$ilp.uphold.com/J4DyEDgPEpD3");
  });
});
