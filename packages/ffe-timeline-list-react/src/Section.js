import React from 'react';
import { string, arrayOf } from 'prop-types';
import uuid from 'uuid';
import ChevronIkon from '@sb1/ffe-icons-react/lib/chevron-ikon';

export default function Section({ title, details }) {
    return (
        <div className="ffe-timeline-list__item">
            <div className="ffe-timeline-list__header">
                <div className="ffe-timeline-list__header-item ffe-timeline-list__header-item--time">
                    {title}
                </div>
                {details.map(detail => (
                    <div
                        key={uuid.v4()}
                        className="ffe-timeline-list__header-item ffe-timeline-list__header-item--detail"
                    >
                        {detail}
                    </div>
                ))}
                <div className="ffe-timeline-list__header-item ffe-timeline-list__header-item--toggle">
                    <ChevronIkon className="ffe-timeline-list__header-icon" />
                </div>
            </div>
        </div>
    );
}

Section.propTypes = {
    title: string.isRequired,
    details: arrayOf(string),
};
Section.defaultProps = {
    details: [],
};
