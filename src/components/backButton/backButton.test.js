// import { render } from "react-dom";
import BackButton from ".";
import screen from '@testing-library/react'

// afterEach(cleanup)

const mockNavigate = jest.fn();
import 'react-router-dom'
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Unit test of back button', () => {
    it('should exist', () => {
        expect(BackButton).toBeDefined()
    })

    it('should render elements',() => {
        let button = render(<BackButton />)
        const buttonElement = button.getByText(/go back/i)
        expect(buttonElement).toBeDefined
    })
})