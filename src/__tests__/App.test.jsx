import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import App from "../App";

describe("Test library works correctly", () => {

    it("True is truthy", () => {
        expect(true).toBe(true);
    });

    it("False is falsy", () => {
        expect(false).toBe(false);
    });
});

describe("App component", () => {

    it("Renders correclty", () => {

        render(<App requestNotification={() => {}} />);

        expect(screen.getByRole("main")).toBeInTheDocument();
    });

    it("Uses common class + dark class when passed true for dark mode", () => {

        render(<App requestNotification={() => {}} useDarkMode={true}/>);

        expect(screen.getByRole("main")).toHaveClass("common", "dark");
    });

    it("Uses common class + light class when passed false for dark mode", () => {

        render(<App requestNotification={() => {}} useDarkMode={false}/>);

        expect(screen.getByRole("main")).toHaveClass("common", "light");
    });

    it("Requests notification permission on mount", () => {

        const requestMock = vi.fn();
        render(<App requestNotification={requestMock} />);

        expect(requestMock).toHaveBeenCalledOnce();
    });
});