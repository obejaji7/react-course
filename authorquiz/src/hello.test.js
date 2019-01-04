import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

function Hello(props) {
    return <h1>Hello at {props.now}</h1>;
}

const moment = new Date(1588946400000);

describe('When testing directly', () => {
    
    let result;
    
    beforeAll(() => {
        result = Hello({now: moment.toISOString()});
    })

    it('it should no be null', () => {
        expect(result).not.toBe(null);
    });

    it('it should be h1', () => {
        expect(result.type).toBe('h1');
    });

    it('it has children', () => {
        expect(result.props.children).toBeTruthy();
    })
});

describe('testing with ReactDOM', () => {
    it('it should renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Hello></Hello>, div);
    });
});

Enzyme.configure({
    adapter: new Adapter()
});

describe('when testing with enzyme', () => {
    it('should renders a h1', () => {
        const wrapper = shallow(<Hello now={moment.toISOString()}></Hello>);
        expect(wrapper.find('h1').length).toBe(1);
    })

    it('should contains Hello at 2020-05-08T14:00:00.000Z', () => {
        const wrapper = shallow(<Hello now={moment.toISOString()}></Hello>);
        expect(wrapper.contains(<h1>Hello at 2020-05-08T14:00:00.000Z</h1>)).toBe(true);
    })
});