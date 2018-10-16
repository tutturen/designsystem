import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'rsg-components/Link';

export function ComponentsListRenderer({ items }) {
    items = items.filter(item => item.visibleName);

    if (!items.length) {
        return null;
    }

    return (
        <ul className="sb1ds-components-list">
            {items.map(({ heading, visibleName, href, content, external }) => (
                <li
                    className={classNames('sb1ds-components-list__item', {
                        'sb1ds-components-list__item--heading': heading,
                    })}
                    key={href}
                >
                    <Link
                        noUnderline={true}
                        className={classNames(
                            'sb1ds-components-list__link',
                            {
                                'sb1ds-components-list__link--heading': heading,
                            },
                            {
                                'sb1ds-components-list__link--active':
                                    href ===
                                    `/${decodeURI(window.location.hash)}`,
                            },
                        )}
                        href={href}
                        target={external ? '_blank' : undefined}
                    >
                        {visibleName}
                    </Link>
                    {content}
                </li>
            ))}
        </ul>
    );
}

ComponentsListRenderer.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ComponentsListRenderer;
