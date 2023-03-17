import RegisterForm from ".";
import { registerFunction, loginFunction } from "../../actions";
import 'react-router-dom'
import { fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

jest.mock('../../actions', () => ({
    loginFunction:jest.fn(),
    registerFunction:jest.fn(),
}))

// jest.mock('../../actions', () => ({
//     loginFunction:jest.fn()
// }))

// afterEach(cleanup)

describe('Unit test of registration form', function() {
    it('should exist', () => {
        expect(RegisterForm).toBeDefined()
    })

    it('should render elements', () => {
        const register = render(< RegisterForm/>)
        const username = register.getByLabelText(/username/i)
        expect(username).not.toBe(null)
        const postcode = register.getByLabelText(/postcode/i)
        expect(postcode).not.toBe(null)
        const email = register.getByLabelText(/email/i)
        expect(email).not.toBe(null)
        const password = register.getByLabelText(/password/i)
        expect(password).not.toBe(null)
        const submit = register.getByRole(/submit/i)
        expect(submit).not.toBe(null)
        const login = register.getByRole('text')
        expect(login).not.toBe(null)
    })

    it('should register', () => {
        const {container} = render(< RegisterForm/>)
        fireEvent.submit(container.querySelector('.submit')) 
        waitFor(() => {
            expect(registerFunction).toBeCalledTimes(1)
            expect(loginFunction).toBeCalledTimes(1)
        })
       
    })

    it('should allow existing users to login', () => {
        const {container} = render(< RegisterForm/>)
        fireEvent.click(container.querySelector('.clickable'))
        expect(mockNavigate).toBeCalledTimes(1)
    })

})