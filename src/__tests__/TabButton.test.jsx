import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TabButton from "../components/TabButton";

describe("TabButton component", () => {

    it("Renders correctly", () => {

        render(<TabButton/>);

        expect(screen.getByRole("tab")).toBeInTheDocument();
    });

    it("Displays text from props", () => {

        render(<TabButton text={"click here"}/>);

        expect(screen.getByRole("tab").textContent).toBe("click here");
    });

    it("Contains an img next to the text", () => {

        render(<TabButton text={"click here"}/>);

        expect(screen.getByRole("tab").textContent).toBe("click here");
        expect(screen.getByRole("img")).toBeInTheDocument();
    });
});