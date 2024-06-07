import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './skeleton.css';

const Skeleton = ({ count = 4 }) => {
    return (
        <div className="skeleton__wrapper container">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="skeleton__card">
                    <div className="skeleton__image skeleton__anime"></div>
                    <div className="skeleton__title skeleton__anime"></div>
                    <div className="skeleton__price skeleton__anime"></div>
                </div>
            ))}
        </div>
    );
};

Skeleton.propTypes = {
    count: PropTypes.number,
};

export default memo(Skeleton);
