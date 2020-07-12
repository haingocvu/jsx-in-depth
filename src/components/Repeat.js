import React from 'react';

function Repeat({ children: repeatCallback, numTimes, ...props }) {
    const result = [];
    for (let i = 0; i < numTimes; i++) {
        result.push(repeatCallback(i))
    }
    return <div>{result}</div>;
}

export default Repeat;