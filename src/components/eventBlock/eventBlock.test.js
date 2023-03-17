import EventBlock from ".";

// afterEach(cleanup)

const mockNavigate = jest.fn();
import 'react-router-dom'
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Unit test of event block', function() {
    it('should exist', () => {
        expect(EventBlock).toBeDefined()
    })

    
    // it('should render elements', () => {
    //     const {container} = render(<EventBlock />)
    //     const image = container.querySelector('img')
    //     console.log(image)
    //     expect(image).not.toBe(null)
    // }) 
})