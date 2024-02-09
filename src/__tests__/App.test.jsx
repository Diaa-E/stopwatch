import { describe, it, expect } from "vitest";

describe("Truthy and Falsy", () => {

    it("True is truthy", () => {
        expect(true).toBe(true);
    });

    it("False is falsy", () => {
        expect(false).toBe(false);
    });
});