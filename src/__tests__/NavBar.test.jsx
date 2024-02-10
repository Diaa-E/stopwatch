import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NavBar from "../components/NavBar";

describe("NavBar component", () => {

    it("Renders correctly", () => {

        render(<NavBar/>);

        expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
});