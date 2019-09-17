import React from 'react';
import { shallow } from 'enzyme';

import Section from './Section';

describe('Section', () => {
    describe('rendering without any children', () => {
        let comp;

        beforeAll(() => {
            comp = shallow(
                <Section title="ThisSection" details={['abc', 'def']} />,
            );
        });

        it('renders an item', () =>
            expect(comp.hasClass('ffe-timeline-list__item')).toBe(true));

        it('contains an header', () =>
            expect(comp.find('.ffe-timeline-list__header').exists()).toBe(
                true,
            ));

        describe('the header', () => {
            let headerItems;

            beforeAll(() => {
                headerItems = comp.find('.ffe-timeline-list__header-item');
            });

            it('contains an element for the title', () =>
                expect(
                    headerItems
                        .filter('.ffe-timeline-list__header-item--time')
                        .text(),
                ).toBe('ThisSection'));

            it('contains two elements with details', () =>
                expect(
                    headerItems.filter(
                        '.ffe-timeline-list__header-item--detail',
                    ).length,
                ).toBe(2));
        });
    });
});
