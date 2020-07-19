import React from 'react';
import { shallow } from 'enzyme';
import Container from './container.component';

it('Excepect to render Container component with no classname property', () => {
    expect(shallow(<Container />)).toMatchSnapshot();
});

it('Excepect to render Container component with classname property', () => {
    expect(shallow(<Container className="my-class"/>)).toMatchSnapshot();
});