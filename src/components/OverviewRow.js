import React from 'react';
import Link from './Link';

const OverviewRow = ({id, title, number}) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{number}</td>
            <td>
                <Link href={`/overview/${id}`} className=''>
                    <button onClick={e => {console.log(id)}}>bekijk</button>
                </Link>

            </td>
                
        </tr>
    );
}

export default OverviewRow;