import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../components/About";

describe("About component", () => {

    it("Renders correctly", () => {

        render(<About/>);

        expect(screen.getByTestId("about")).toBeInTheDocument();
    });

    it("Has 2 paragraphs", () => {

        render(<About/>);

        expect(screen.getAllByRole("paragraph").length).toBe(2)
    });

    it("Has 1 heading", () => {

        render(<About/>);

        expect(screen.getAllByRole("heading").length).toBe(1);
    });

    it("Has 2 links", () => {

        render(<About/>);

        expect(screen.getAllByRole("link").length).toBe(2);
    });

    it("Shows app title (static) and version (prop)", () => {

        render(<About version={"1.0.0"} />);

        expect(screen.getByRole("heading").textContent).toBe("Stopwatch v1.0.0");
    });
});