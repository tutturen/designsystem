import React from 'react';
import { node } from 'prop-types';
import Section from './Section';

const TimelineList = ({ children }) => {
    return <div className="ffe-timeline-list">{children}</div>;
};

TimelineList.propTypes = {
    children: node,
};

TimelineList.Section = Section;

export default TimelineList;
