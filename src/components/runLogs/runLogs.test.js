import { fireEvent } from "@testing-library/react";
import RunLogs from ".";
import { runLogs } from "../../actions";

jest.mock('../../actions', () => ({
    runLogs: jest.fn()
}))

describe('Unit test of run Logs', function() {
    it('should exist', function(){
        expect(RunLogs).toBeDefined()
    })

    it('should render elements', () => {
        const {container} = render(< RunLogs/>)
        const btn = container.querySelector('button')
        expect(btn).not.toBe(null)        
    })

    it('should run logs when clicked', () => {
        const {container} = render(< RunLogs/>)
        fireEvent.click(container.querySelector('button'))
        expect(runLogs).toBeCalledTimes(1)
    })
})