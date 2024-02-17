import { describe, it, expect } from "vitest";
import { getHandAngle, getHourglassHeight } from "../watchPositioner";

describe("Hand angle", () => {

    it("Return 0 turns for 0 seconds", () => {

        expect(getHandAngle(0, 60 * 60 * 100)).toBe(0);
    });

    it("Return 0.25 turns for 15 minutes", () => {

        expect(getHandAngle(15 * 60 * 100, 60 * 60 * 100)).toBe(0.25);
    });

    it("Return 1.25 turns for 1 hour and 15 minutes", () => {

        expect(getHandAngle((60 * 60 * 100) + (15 * 60 * 100), 60 * 60 * 100)).toBe(0.25);
    });
});

describe("Hourglass sand height", () => {

    it("Returns 100 top, 0 bottom for 0 seconds", () => {

        expect(getHourglassHeight(0, 60 * 60)).toEqual({bottom: 100, top: 0});
    });

    it("Returns 80 top, 20 bottom for 20 seconds remaining out of 00:01:40 timer", () => {

        expect(getHourglassHeight(20, 100)).toEqual({bottom: 80, top: 20});
    });

    it("Returns 0 top, 100 bottom when timer ends", () => {

        expect(getHourglassHeight(100, 100)).toEqual({bottom: 0, top: 100});
    });
});