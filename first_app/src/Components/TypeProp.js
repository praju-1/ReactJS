import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TypeProp extends Component {
    render() {
        const { myName, myNumber, value, anytype, boolean } = this.props;

        return (
            <div>
                <p>My name is: {myName}</p>
                <p>My age is: {myNumber}</p>
                <p>Array is: {value}</p>
                <p>Enter any data: {anytype}</p>
                <p>I am: {boolean ? 'true' : 'false'}</p>
            </div>
        );
    }
}

TypeProp.propTypes = {
    myName: PropTypes.string.isRequired,
    myNumber: PropTypes.number.isRequired,
    value: PropTypes.array.isRequired,
    anytype: PropTypes.any.isRequired,
    boolean: PropTypes.bool.isRequired,
};

export default TypeProp;
