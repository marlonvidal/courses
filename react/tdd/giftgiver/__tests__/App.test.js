import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/components/App'

console.log('teste');
const app = shallow(<App />);

it('should render without errors', () => {
    expect(app).toMatchSnapshot();
})