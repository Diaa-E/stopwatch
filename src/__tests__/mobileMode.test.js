import { describe, it, expect } from "vitest";
import { toggleMobileMode, isSmallScreen } from "../mobileMode";
import { vi } from "vitest";
import { fireEvent } from "@testing-library/react";

describe("Device mode", () => {

    it("Does not call setter when screen size is not changed.", () => {

        const setterMock = vi.fn();
        toggleMobileMode(setterMock);

        expect(setterMock).not.toHaveBeenCalled();
    });

    it("Calls setter when screen size is changed.", () => {

        const setterMock = vi.fn();
        toggleMobileMode(setterMock);
        fireEvent(window, new Event("resize"));

        expect(setterMock).toHaveBeenCalled();
    });

    it("Returns true when width is less than 700px", () => {

        const setterMock = vi.fn();
        setterMock.mockImplementation(isSmallScreen);
        toggleMobileMode(setterMock);
        window.innerWidth = 500;
        fireEvent(window, new Event("resize"));

        expect(setterMock).toHaveReturned(true);
    });

    it("Returns false when width is more than 700px", () => {

        const setterMock = vi.fn();
        setterMock.mockImplementation(isSmallScreen)
        toggleMobileMode(setterMock);
        window.innerWidth = 1500;
        fireEvent(window, new Event("resize"));

        expect(setterMock).toHaveReturned(false);
    });
});