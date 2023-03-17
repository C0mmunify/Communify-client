import ProfileBlock from ".";
import jwt from 'jwt-decode';

// afterEach(cleanup)

const mockjwt = jest.fn() 
jest.mock('jwt-decode', () => () => ({
    ...jest.requireActual('jwt-decode'),
    jwt: () => mockjwt
    }));

describe('Unit test of profile block', function() {
    it('should exist', function(){
        expect(ProfileBlock).toBeDefined()
    })

    it('should render elements', () => {
        const {container} = render(< ProfileBlock/>)
        const block = container.querySelector('[id=profileBlock]')
        expect(block).not.toBe(null)
        const profileImg = container.querySelector('[id=profileImg]')
        expect(profileImg).not.toBe(null)
        const username = container.querySelector('h1')
        expect(username).not.toBe(null)
        const age = container.querySelector('#profileAge')
        expect(age).not.toBe(null)
        const council = container.querySelector('#profileCouncil')
        expect(council).not.toBe(null)
    })
})