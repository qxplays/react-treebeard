import React from 'react';
import PropTypes from 'prop-types';

import {Div} from '../common';

const Header = ({onSelect, node, style}) => (
    <div style={style.base} onClick={onSelect}>
        <Div style={style.title}>
            {node.name}
        </Div>
    </div>
);

Header.propTypes = {
    onSelect: PropTypes.func,
    style: PropTypes.object,
    node: PropTypes.object.isRequired
};

export default Header;
