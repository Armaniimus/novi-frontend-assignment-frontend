import React from 'react';
import Link from './Link';

const OverviewRow = ({id, title, number}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{title}</td>
            <td>
                <Link href={`/overview/${id}`} className=''>
                    <button>bekijk</button>
                </Link>
            </td>
                
        </tr>
    );
}

export default OverviewRow;