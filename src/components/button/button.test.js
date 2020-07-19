import React from 'react';
import { shallow } from 'enzyme';
import Button from './button.component';

it('Excepect to render Button component', () => {
    expect(shallow(<Button />)).toMatchSnapshot();
});