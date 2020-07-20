import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './formInput.component';

it('Excepect to render FormInput component with value, label and hint', () => {
    const mockProps = {
        value: 'example@gmail.com',
        label: 'My label',
        hint: 'My hint'
    };
    expect(shallow(<FormInput {...mockProps} />)).toMatchSnapshot();
});

it('Excepect to render FormInput component with no hint', () => {
    const mockLabel = 'My Label';
    const mockValue = 'My value';
    expect(shallow(<FormInput value={mockValue} label={mockLabel}/>)).toMatchSnapshot();
});

it('Excepect to render FormInput component with only hint', () => {
    const mockHint = 'My hint';
    expect(shallow(<FormInput hint={mockHint} />)).toMatchSnapshot();
});

it('Excepect to render FormInput component with no properties', () => {
    expect(shallow(<FormInput />)).toMatchSnapshot();
});