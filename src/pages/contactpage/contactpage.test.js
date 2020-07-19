import React from 'react';
import { shallow } from 'enzyme';
import Contact from './contactpage.component';


it('Excepect to render Contact component', () => {
    expect(shallow(<Contact />)).toMatchSnapshot();
});