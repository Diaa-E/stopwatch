import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TabButton from "../components/TabButton";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("TabButton component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx),
        }
    }

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

    it("Has the active css class when active prop is true", () => {

        render(<TabButton text={"click here"} active={true}/>);

        expect(screen.getByRole("tab")).toHaveClass("active");
    });

    it("Does not call callback when it is not clicked", () => {

        const onClick = vi.fn();
        const {user} = setup(<TabButton onClick={onClick}/>);

        expect(onClick).not.toHaveBeenCalled();
    });

    it("Calls callback when it is clicked", async () => {

        const onClick = vi.fn();
        const {user} = setup(<TabButton onClick={onClick}/>);
        const button = screen.getByRole("tab");
        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });
});