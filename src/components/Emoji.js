import React from 'react';

const Emoji = props => (
    <span
        style={{ paddingRight: 10, fontSize: '1.2em' }}
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

export default Emoji;