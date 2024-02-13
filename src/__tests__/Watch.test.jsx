import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Watch from "../components/Watch";
import { useTransition } from "react";

describe("Watch component", () => {

    it("Renders correctly", () => {

        render(<Watch/>);

        expect(screen.getByRole("timer")).toBeInTheDocument();
    });

    it("Renders 60 markers", () => {

        render(<Watch/>);

        expect(screen.getAllByTestId("marker").length).toBe(60);
    });

    it("Renders a hand", () => {

        render(<Watch/>);

        expect(screen.getByTestId("hand")).toBeInTheDocument();
    });

    it("Shows time from props", () => {

        render(<Watch time={60 * 60 * 100}/>);

        expect(screen.getByTestId("time").textContent).toBe("01:00:00.00");
    });
});