import { describe, it, expect } from "vitest";
import { getHandAngle } from "../watchPositioner";

describe("Hand angle", () => {

    it("Return 0 turns for 0 seconds", () => {

        expect(getHandAngle(0, 60 * 60 * 100)).toBe(0);
    });

    it("Return 0.25 turns for 15 minutes", () => {

        expect(getHandAngle(15 * 60 * 100, 60 * 60 * 100)).toBe(0.25);
    });

    it("Return 1.25 turns for 1 hour and 15 minutes", () => {

        expect(getHandAngle((60 * 60 * 100) + (15 * 60 * 100), 60 * 60 * 100)).toBe(1.25);
    });
});