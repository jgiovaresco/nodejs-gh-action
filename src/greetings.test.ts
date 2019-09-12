import { greet } from "./greetings";

describe("greetings", () => {
  describe("greet", () => {
    it("greets a person", () => {
      expect(greet("John")).toEqual("Hello, John");
    });
  });
});
