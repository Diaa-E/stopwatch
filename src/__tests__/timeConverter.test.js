import { describe, it, expect } from "vitest";
import { convertFromCS, convertToCS, convertToDoubleDigit, convertFromSeconds, convertToSeconds } from "../timeConverter";

describe("Convert to double digit", () => {

    it("converts single digit to double digit", () => {

        expect(convertToDoubleDigit(0)).toBe("00");
    });

    it("returns double digit unchanged", () => {

        expect(convertToDoubleDigit(10)).toBe("10");
    });

    it("returns 00 for negative values", () => {

        expect(convertToDoubleDigit(-1)).toBe("00");
    });

    it("returns results as string for all conditions cases", () => {

        expect(convertToDoubleDigit(100)).toBeTypeOf("string"); // value > limit
        expect(convertToDoubleDigit(15)).toBeTypeOf("string"); // double digit value
        expect(convertToDoubleDigit(5)).toBeTypeOf("string"); // single digit value
        expect(convertToDoubleDigit("")).toBeTypeOf("string"); // empty string value
        expect(convertToDoubleDigit(-1)).toBeTypeOf("string"); //negative value
    });

    it("returns upper limit for values bigger than the upper limit", () => {

        expect(convertToDoubleDigit(80, 59)).toBe("59");
    });

    it("Handles string arguments", () => {

        expect(convertToDoubleDigit("3")).toBe("03");
    });

    it("Converts empty strings to 00", () => {

        expect(convertToDoubleDigit("")).toBe("00");
    });

    it("Does not add zeros to already double digit formatted values", () => {
        
        expect(convertToDoubleDigit("02")).toBe("02");
    });
});

describe("From seconds", () => {

    it("converts seconds < 1 min: lower bound -> 00:00:00", () => {

        expect(convertFromSeconds(0)).toEqual(["00", "00", "00"]);
    });

    it("converts seconds < 1 min: single digit -> 00:00:01",() => {

        expect(convertFromSeconds(1)).toEqual(["00", "00", "01"]);
    });

    it("converts seconds < 1 min: double digit -> 00:00:11",() => {

        expect(convertFromSeconds(11)).toEqual(["00", "00", "11"]);
    });

    it("converts seconds < 1 min: random value -> 00:00:30",() => {

        expect(convertFromSeconds(30)).toEqual(["00", "00", "30"]);
    });

    it("converts seconds < 1 min: upper bound -> 00:00:59",() => {

        expect(convertFromSeconds(59)).toEqual(["00", "00", "59"]);
    });

    //more than 1 minute ----------------------

    it("Converts 1 minute < seconds < 1 hour: lower bound -> 00:01:00", () => {

        expect(convertFromSeconds(60)).toEqual(["00", "01", "00"]);
    });

    it("Converts 1 minute < seconds < 1 hour: single digit -> 00:02:00", () => {

        expect(convertFromSeconds(60 * 2)).toEqual(["00", "02", "00"]);
    });

    it("Converts 1 minute < seconds < 1 hour: double digit -> 00:11:00", () => {

        expect(convertFromSeconds(60 * 11)).toEqual(["00", "11", "00"]);
    });

    it("Converts 1 minute < seconds < 1 hour: random value -> 00:30:00", () => {

        expect(convertFromSeconds(60 * 30)).toEqual(["00", "30", "00"]);
    });

    it("Converts 1 minute < seconds < 1 hour: upper bound -> 00:59:59", () => {

        expect(convertFromSeconds(60 * 59 + 59)).toEqual(["00", "59", "59"]);
    });

    //more than 1 hour ----------------------

    it("Converts 1 hour < seconds < 99 hours: lower bound -> 01:00:00", () => {

        expect(convertFromSeconds(60 * 60)).toEqual(["01", "00", "00"]);
    });

    it("Converts 1 hour < seconds < 99 hours: single digit -> 02:00:00", () => {

        expect(convertFromSeconds(2 * 60 * 60)).toEqual(["02", "00", "00"]);
    });

    it("Converts 1 hour < seconds < 99 hours: double digit -> 11:00:00", () => {

        expect(convertFromSeconds(11 * 60 * 60)).toEqual(["11", "00", "00"]);
    });

    it("Converts 1 hour < seconds < 99 hours: random value -> 30:00:00", () => {

        expect(convertFromSeconds(30 * 60 * 60)).toEqual(["30", "00", "00"]);
    });

    it("Converts 1 hour < seconds < 99 hours: upper bound -> 99:59:59", () => {

        expect(convertFromSeconds((99 * 60 * 60) + (59 * 60) + 59)).toEqual(["99", "59", "59"]);
    });
});

describe("To seconds", () => {

    it("converts seconds < 1 min: lower bound -> 00:00:00", () => {

        expect(convertToSeconds("00:00:00")).toBe(0);
    });

    it("converts seconds < 1 min: single digit -> 00:00:01",() => {

        expect(convertToSeconds("00:00:01")).toBe(1);
    });

    it("converts seconds < 1 min: double digit -> 00:00:11",() => {

        expect(convertToSeconds("00:00:11")).toBe(11);
    });

    it("converts seconds < 1 min: random value -> 00:00:30",() => {

        expect(convertToSeconds("00:00:30")).toBe(30);
    });

    it("converts seconds < 1 min: upper bound -> 00:00:59",() => {

        expect(convertToSeconds("00:00:59")).toEqual(59);
    });

    //more than 1 minute ----------------------

    it("Converts 1 minute < seconds < 1 hour: lower bound -> 00:01:00", () => {

        expect(convertToSeconds("00:01:00")).toEqual(60);
    });

    it("Converts 1 minute < seconds < 1 hour: single digit -> 00:02:00", () => {

        expect(convertToSeconds("00:02:00")).toEqual(60 * 2);
    });

    it("Converts 1 minute < seconds < 1 hour: double digit -> 00:11:00", () => {

        expect(convertToSeconds("00:11:00")).toEqual(60 * 11);
    });

    it("Converts 1 minute < seconds < 1 hour: random value -> 00:30:00", () => {

        expect(convertToSeconds("00:30:00")).toEqual(60 * 30);
    });

    it("Converts 1 minute < seconds < 1 hour: upper bound -> 00:59:59", () => {

        expect(convertToSeconds("00:59:59")).toEqual(60 * 59 + 59);
    });

    //more than 1 hour ----------------------

    it("Converts 1 hour < seconds < 99 hours: lower bound -> 01:00:00", () => {

        expect(convertToSeconds("01:00:00")).toEqual(60 * 60);
    });

    it("Converts 1 hour < seconds < 99 hours: single digit -> 02:00:00", () => {

        expect(convertToSeconds("02:00:00")).toEqual(2 * 60 * 60);
    });

    it("Converts 1 hour < seconds < 99 hours: double digit -> 11:00:00", () => {

        expect(convertToSeconds("11:00:00")).toEqual(11 * 60 * 60);
    });

    it("Converts 1 hour < seconds < 99 hours: random value -> 30:00:00", () => {

        expect(convertToSeconds("30:00:00")).toEqual(30 * 60 * 60);
    });

    it("Converts 1 hour < seconds < 99 hours: upper bound -> 99:59:59", () => {

        expect(convertToSeconds(("99:59:59"))).toEqual((99 * 60 * 60) + (59 * 60) + 59);
    });
});

describe("From centiseconds", () => {

    it("converts centiseconds < 1 min: lower bound -> 00:00:00.00", () => {

        expect(convertFromCS(0)).toEqual(["00", "00", "00.00"]);
    });

    it("converts centiseconds < 1 min: single digit -> 00:00:01.00",() => {

        expect(convertFromCS(100)).toEqual(["00", "00", "01.00"]);
    });

    it("converts centiseconds < 1 min: double digit -> 00:00:11.00",() => {

        expect(convertFromCS(1100)).toEqual(["00", "00", "11.00"]);
    });

    it("converts centiseconds < 1 min: random value -> 00:00:30.00",() => {

        expect(convertFromCS(3000)).toEqual(["00", "00", "30.00"]);
    });

    it("converts centiseconds < 1 min: upper bound -> 00:00:59.99",() => {

        expect(convertFromCS(5999)).toEqual(["00", "00", "59.99"]);
    });

    //more than 1 minute ----------------------

    it("Converts 1 minute < centiseconds < 1 hour: lower bound -> 00:01:00.00", () => {

        expect(convertFromCS(60 * 100)).toEqual(["00", "01", "00.00"]);
    });

    it("Converts 1 minute < centiseconds < 1 hour: single digit -> 00:02:00.00", () => {

        expect(convertFromCS(60 * 2 * 100)).toEqual(["00", "02", "00.00"]);
    });

    it("Converts 1 minute < centiseconds < 1 hour: double digit -> 00:11:00.00", () => {

        expect(convertFromCS(60 * 11 * 100)).toEqual(["00", "11", "00.00"]);
    });

    it("Converts 1 minute < centiseconds < 1 hour: random value -> 00:30:00.00", () => {

        expect(convertFromCS(60 * 30 * 100)).toEqual(["00", "30", "00.00"]);
    });

    it("Converts 1 minute < centiseconds < 1 hour: upper bound -> 00:59:59.99", () => {

        expect(convertFromCS(60 * 59 * 100 + 5999)).toEqual(["00", "59", "59.99"]);
    });

    //more than 1 hour ----------------------

    it("Converts 1 hour < centiseconds < 99 hours: lower bound -> 01:00:00.00", () => {

        expect(convertFromCS(60 * 60 * 100)).toEqual(["01", "00", "00.00"]);
    });

    it("Converts 1 hour < centiseconds < 99 hours: single digit -> 02:00:00.00", () => {

        expect(convertFromCS(2 * 60 * 60 * 100)).toEqual(["02", "00", "00.00"]);
    });

    it("Converts 1 hour < centiseconds < 99 hours: double digit -> 11:00:00.00", () => {

        expect(convertFromCS(11 * 60 * 60 * 100)).toEqual(["11", "00", "00.00"]);
    });

    it("Converts 1 hour < centiseconds < 99 hours: random value -> 30:00:00.00", () => {

        expect(convertFromCS(30 * 60 * 60 * 100)).toEqual(["30", "00", "00.00"]);
    });

    it("Converts 1 hour < centiseconds < 99 hours: upper bound -> 99:59:59.99", () => {

        expect(convertFromCS((99 * 60 * 60 * 100) + (59 * 60 * 100) + 5999)).toEqual(["99", "59", "59.99"]);
    });
});

describe("To centiseconds", () => {

    it("converts centiseconds < 1 min: lower bound -> 00:00:00.00", () => {

        expect(convertToCS("00:00:00.00")).toBe(0);
    });

    it("converts centiseconds < 1 min: single digit -> 00:00:01.00",() => {

        expect(convertToCS("00:00:01.00")).toBe(100);
    });

    it("converts centiseconds < 1 min: double digit -> 00:00:11.00",() => {

        expect(convertToCS("00:00:11.00")).toBe(1100);
    });

    it("converts centiseconds < 1 min: random value -> 00:00:30.00",() => {

        expect(convertToCS("00:00:30.00")).toBe(3000);
    });

    it("converts centiseconds < 1 min: upper bound -> 00:00:59.99",() => {

        expect(convertToCS("00:00:59.99")).toEqual(5999);
    });

    //more than 1 minute ----------------------

    it("Converts 1 minute < centiseconds < 1 hour: lower bound -> 00:01:00.00", () => {

        expect(convertToCS("00:01:00.00")).toEqual(60 * 100);
    });

    it("Converts 1 minute < centiseconds < 1 hour: single digit -> 00:02:00.00", () => {

        expect(convertToCS("00:02:00.00")).toEqual(60 * 2 * 100);
    });

    it("Converts 1 minute < centiseconds < 1 hour: double digit -> 00:11:00.00", () => {

        expect(convertToCS("00:11:00.00")).toEqual(60 * 11 * 100);
    });

    it("Converts 1 minute < centiseconds < 1 hour: random value -> 00:30:00.00", () => {

        expect(convertToCS("00:30:00.00")).toEqual(60 * 30 * 100);
    });

    it("Converts 1 minute < centiseconds < 1 hour: upper bound -> 00:59:59.99", () => {

        expect(convertToCS("00:59:59.99")).toEqual(60 * 59 * 100 + 5999);
    });

    //more than 1 hour ----------------------

    it("Converts 1 hour < centiseconds < 99 hours: lower bound -> 01:00:00.00", () => {

        expect(convertToCS("01:00:00.00")).toEqual(60 * 60 * 100);
    });

    it("Converts 1 hour < centiseconds < 99 hours: single digit -> 02:00:00.00", () => {

        expect(convertToCS("02:00:00.00")).toEqual(2 * 60 * 60 * 100);
    });

    it("Converts 1 hour < centiseconds < 99 hours: double digit -> 11:00:00.00", () => {

        expect(convertToCS("11:00:00.00")).toEqual(11 * 60 * 60 * 100);
    });

    it("Converts 1 hour < centiseconds < 99 hours: random value -> 30:00:00.00", () => {

        expect(convertToCS("30:00:00.00")).toEqual(30 * 60 * 60 * 100);
    });

    it("Converts 1 hour < centiseconds < 99 hours: upper bound -> 99:59:59.99", () => {

        expect(convertToCS(("99:59:59.99"))).toEqual((99 * 60 * 60 * 100) + (59 * 60 * 100) + 5999);
    });
});