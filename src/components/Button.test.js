import Button from "./Button"
import {render, screen, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

describe('Button test', () => {
    test('Button is render', () => {
        render(<Button />)
        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument()
    })
    test("test modal func", () => {
        const mockedOnStepClick = jest.fn();
        const { getByRole } = render(<Button onClick={mockedOnStepClick} />);
        fireEvent.click(getByRole("button"));
        expect(mockedOnStepClick).toHaveBeenCalledTimes(1);
      })

    it("should do snapshot", () => {
        const button = render(<Button />)
        expect(button).toMatchSnapshot();
      });
})

