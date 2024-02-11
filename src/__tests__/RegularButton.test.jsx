import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RegularButton from "../components/RegularButton";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("RegularButton component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx)
        };
    }

    it("Renders correctly", () => {

        render(<RegularButton/>);

        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("Displays text from props", () => {

        render(<RegularButton text={"click here"}/>);

        expect(screen.getByRole("button").textContent).toBe("click here");
    });

    it("Displays a icon next to text", () => {

        render(<RegularButton text={"click here"}/>);

        expect(screen.getByRole("button").textContent).toBe("click here");
        expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("Uses danger style when danger prop is true", () => {

        render(<RegularButton danger={true}/>);

        expect(screen.getByRole("button")).toHaveClass("button-danger");
    });

    it("Does not use danger class when danger prop is false", () => {

        render(<RegularButton danger={false}/>);

        expect(screen.getByRole("button")).not.toHaveClass("button-danger");
    });

    it("Does not call callback when it is not clicked", () => {

        const onClick = vi.fn();
        const {user} = setup(<RegularButton onClick={onClick}/>);

        expect(onClick).not.toHaveBeenCalled();
    });

    it("Calls callback when it is clicked", async () => {

        const onClick = vi.fn();
        const {user} = setup(<RegularButton onClick={onClick}/>);
        const button = screen.getByRole("button");
        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });
});