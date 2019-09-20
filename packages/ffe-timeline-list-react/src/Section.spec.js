import React from 'react';
import { shallow } from 'enzyme';

import Section from './Section';

describe('Section', () => {
    describe('rendering without any children', () => {
        let comp;

        beforeAll(() => {
            comp = shallow(
                <Section
                    title="This Section"
                    details={[
                        'abc',
                        <em>def</em>, //eslint-disable-line react/jsx-key
                    ]}
                />,
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
                ).toBe('This Section'));

            it('contains two elements with details', () =>
                expect(
                    headerItems.filter(
                        '.ffe-timeline-list__header-item--detail',
                    ).length,
                ).toBe(2));

            it('contains details given as string', () =>
                expect(
                    headerItems
                        .filter('.ffe-timeline-list__header-item--detail')
                        .at(0)
                        .text(),
                ).toBe('abc'));

            it('contains details given as dom node', () =>
                expect(
                    headerItems
                        .filter('.ffe-timeline-list__header-item--detail')
                        .at(1)
                        .children()
                        .first()
                        .type(),
                ).toBe('em'));
        });
    });
});
