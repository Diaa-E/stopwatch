import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TimerSetter from "../components/TimerSetter";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

function setup(jsx)
{
    return {

        user: userEvent.setup(),
        ...render(jsx)
    };
}

describe("TimerSetter component", () => {

    it("Renders correctly", () => {

        render(<TimerSetter formattedTime={"01:15:45"}/>);

        expect(screen.getByRole("form")).toBeInTheDocument();
    });

    it("Displays time split into 3 text boxes", () => {

        act(() => {

            render(<TimerSetter formattedTime={"01:15:45"} />);
        });

        expect(screen.getByTestId("seconds").value).toBe("45");
        expect(screen.getByTestId("minutes").value).toBe("15");
        expect(screen.getByTestId("hours").value).toBe("01");
    });
})