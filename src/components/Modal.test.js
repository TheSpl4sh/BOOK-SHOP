import "@testing-library/jest-dom/extend-expect"
import {render, screen, fireEvent} from '@testing-library/react';
import Modal from "./Modal";

describe('Modal component', () => {
    it('should render modal component with buttons', () => {
        const handleClose = jest.fn()
        const modalActions = (<button className='modal-buttons__item' onClick={handleClose}>Cancel</button>)
        render(
            <Modal 
                onClose={handleClose} 
                header="Hello world" 
                text="How its going ?"
                actions={modalActions}
            />
        )

        const modalHeader = screen.getByText('Hello world')
        expect(modalHeader).toBeInTheDocument()

        const modalText = screen.getByText('How its going ?')
        expect(modalText).toBeInTheDocument()

        const modalWindow = screen.findAllByText(/modal-window/)

        const modalButton = screen.getByText('Cancel')
        expect(modalButton).toBeInTheDocument()

        fireEvent.click(modalButton)
        expect(handleClose).toHaveBeenCalledTimes(1)

        const modalCloseButton = screen.getByText('X')
        expect(modalCloseButton).toBeInTheDocument()
        
        fireEvent.click(modalCloseButton)
        expect(handleClose).toHaveBeenCalledTimes(2)
    })

    it("should do snapshot", () => {
        const handleClose = jest.fn()
        const modalActions = (<button className='modal-buttons__item' onClick={handleClose}>Cancel</button>)
        
        const modal = render(
            <Modal 
                onClose={handleClose} 
                header="Hello world" 
                text="How its going ?"
                actions={modalActions}
            />)
        expect(modal).toMatchSnapshot();
      });
})