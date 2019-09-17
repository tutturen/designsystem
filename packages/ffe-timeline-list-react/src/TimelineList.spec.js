import React from 'react';
import { shallow } from 'enzyme';

import TimelineList from './TimelineList';

describe('TimelineList', () => {
    let wrapper;
    const childNode = (
        <div>
            <hr />
        </div>
    );

    beforeAll(() => {
        wrapper = shallow(<TimelineList>{childNode}</TimelineList>);
    });

    it('renders a element', () => {
        expect(wrapper.hasClass('ffe-timeline-list')).toBe(true);
    });

    it('contains children', () => {
        expect(wrapper.find('.ffe-timeline-list').contains(childNode)).toBe(
            true,
        );
    });
});
