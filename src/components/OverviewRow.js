import React from 'react';

const OverviewRow = ({id, title, number}) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{number}</td>
            <td><button onClick={e => {console.log(id)}}>bekijk</button></td>
        </tr>
    );
}

export default OverviewRow;