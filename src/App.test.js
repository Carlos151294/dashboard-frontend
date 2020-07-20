import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from './App';
import { store } from './redux/store';
import DashboardPage from './pages/dashboard/dashboard.component';
import LoginPage from './pages/loginpage/loginpage.component';
import ContactPage from './pages/contactpage/contactpage.component';

it('Excepect to render App component without crashing', () => {
    expect(shallow(<Provider store={store}><App /></Provider>)).toMatchSnapshot();
});

it('Should redirect to Login Page', () => {
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/login']}>
                <App />
            </MemoryRouter>
        </Provider>
    );
    expect(wrapper.find(LoginPage)).toHaveLength(1);
});

it('Should redirect to Contact Page', () => {
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/contact']}>
                <App />
            </MemoryRouter>
        </Provider>
    );
    expect(wrapper.find(ContactPage)).toHaveLength(1);
});

it('Should redirect to Login Page when user is NOT logged', () => {
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/dashboard']}>
                <App />
            </MemoryRouter>
        </Provider>
    );
    expect(wrapper.find(DashboardPage)).toHaveLength(0);
});

it('Should redirect to Login Page for nonexitant route', () => {
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/random']}>
                <App />
            </MemoryRouter>
        </Provider>
    );
    expect(wrapper.find(LoginPage)).toHaveLength(1);
});