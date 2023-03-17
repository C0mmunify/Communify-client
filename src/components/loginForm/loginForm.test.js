import LoginForm from ".";
import { loginFunction } from "../../actions"
import 'react-router-dom'
import { fireEvent } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";

// afterEach(cleanup)

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

jest.mock('../../actions', () => ({
    loginFunction:jest.fn()
}))


describe('Unit test of login form', function() {
    it('should exist', function(){
        expect(LoginForm).toBeDefined()
    })

    it('should render elements', () => {
        const login = render(< LoginForm />)
        const email = login.getByLabelText(/email/i)
        expect(email).not.toBe(null)
        const password = login.getByLabelText(/password/i)
        expect(password).not.toBe(null)
        const submit = login.getByRole(/submit/i)
        expect(submit).not.toBe(null)
        const register = login.getByText(/register/i)
        expect(register).not.toBe(null)
    })

    it('should login', () => {
        const {container} = render(<LoginForm />)
        fireEvent.submit(container.querySelector('.submit'))
        expect(loginFunction).toBeCalledTimes(1)
    })

    it('should allow new users to register', () => {
        const {container} = render(
            < BrowserRouter >
                < LoginForm />
            </BrowserRouter>
        )
        fireEvent.click(container.querySelector('.clickable'))
        expect(mockNavigate).toBeCalledTimes(1)
    })
})