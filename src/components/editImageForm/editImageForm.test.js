import { fireEvent } from "@testing-library/react";
import EditImageForm from ".";
import { editImageFunction } from '../../actions'

// afterEach(cleanup)

jest.mock('../../actions', () => ({
    editImageFunction: jest.fn()
}))

describe('Unit test of edit image form', function() {
    it('should exist', () => {
        expect(EditImageForm).toBeDefined()
    })

    it('should render elements', () => {
        const {container} = render(<EditImageForm />)
        const form = container.querySelector('form')
        expect(form).not.toEqual(null)
        const fileInput = container.querySelector('form>label')
        expect(fileInput.textContent).toBe('Add a profile image')
        const submit = container.querySelector('#formSubmit') 
        expect(submit).not.toEqual(null)
        const profile = container.querySelector('#profileImg')
        expect(profile).not.toEqual(null)
    })

    it('should submit an image', () => {
        const {container} = render(<EditImageForm />)
        fireEvent.click(container.querySelector('#formSubmit'))
        expect(editImageFunction).toBeCalledTimes(1)
    })
})