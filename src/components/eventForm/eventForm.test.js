import { fireEvent } from "@testing-library/react";
import EventForm from ".";
import { createEventFunction } from "../../actions"

jest.mock('../../actions', () => ({
    createEventFunction:jest.fn()
}))

describe('Unit test of event form', function() {
    it('should exist', function(){
        expect(EventForm).toBeDefined()
    })

    it('should render elements', () => {
        const events = render(< EventForm />)
        const title = events.getByLabelText(/eventtitle/i)
        expect(title).not.toBe(null)
        const description = events.getByLabelText(/eventdescription/i)
        expect(description).not.toBe(null)
        const location = events.getByLabelText(/eventlocation/i)
        expect(location).not.toBe(null)
        const council = events.getByLabelText(/eventcouncil/i)
        expect(council).not.toBe(null)
        const spaces = events.getByLabelText(/eventspaces/i)
        expect(spaces).not.toBe(null)
        const start = events.getByLabelText(/startdate/i)
        expect(start).not.toBe(null)
        const end = events.getByLabelText(/enddate/i)
        expect(end).not.toBe(null)
    })

    it('should submit an event', () => {
        const {container} = render(< EventForm />)
        fireEvent.submit(container.querySelector('.submit'))
        expect(createEventFunction).toBeCalledTimes(1)
    })
        
})