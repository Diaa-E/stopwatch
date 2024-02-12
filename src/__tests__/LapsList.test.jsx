import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LapsList from "../components/LapsList";

describe("LapsList component", () => {

    it("Renders correctly", () => {

        render(<LapsList laps={[]}/>);

        expect(screen.getByRole("list")).toBeInTheDocument();
    });

    it("Renders no children if lap list is empty", () => {

        render(<LapsList laps={[]}/>);

        expect([...screen.getByRole("list").childNodes]).toEqual([]);
    });

    it("Renders a number of list items equal to passed lap items", () => {

        render(<LapsList laps={[{value: "00:00:00.00", id: 0}, {value: "00:00:12.45", id: 1}]}/>);

        expect([...screen.getByRole("list").childNodes].length).toBe(2);
    });

    it("Renders laps in reversed order, each lap is marked by an i. before value", () => {

        render(<LapsList laps={[{value: "00:00:00.00", id: 0}, {value: "00:00:12.45", id: 1}]}/>);

        expect(screen.getByRole("list").childNodes[0].childNodes[0].textContent).toBe("2.");
        expect(screen.getByRole("list").childNodes[0].childNodes[1].textContent).toBe("00:00:00.00");
        expect(screen.getByRole("list").childNodes[1].childNodes[0].textContent).toBe("1.");
        expect(screen.getByRole("list").childNodes[1].childNodes[1].textContent).toBe("00:00:12.45");
    });
});