import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hourglass from "../components/Hourglass";

describe("Hourglass component", () => {

    it("Renders correclty", () => {
        
        render(<Hourglass/>);

        expect(screen.getByRole("timer")).toBeInTheDocument();
    });

    it("Renders top and bottom hourglass each containing sand", () => {

        render(<Hourglass/>);

        expect(screen.getByTestId("hourglassTop")).toBeInTheDocument();
        expect(screen.getByTestId("hourglassBottom")).toBeInTheDocument();
        expect(screen.getByTestId("sandTop")).toBeInTheDocument();
        expect(screen.getByTestId("sandBottom")).toBeInTheDocument();
    });

    it("Shows time from props", () => {

        render(<Hourglass time={60 * 60 + 35}/>);

        expect(screen.getByTestId("time").textContent).toBe("01:00:35");
    });
});