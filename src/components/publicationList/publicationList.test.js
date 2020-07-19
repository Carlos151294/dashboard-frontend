import React from 'react';
import { shallow } from 'enzyme';
import PublicationList from './publicationList.component';

it('Excepect to render PublicationList component', () => {
    expect(shallow(<PublicationList />)).toMatchSnapshot();
});