import React from 'react';
import Link from './Link';
import Button from './Button';
import '../css/overviewRow.css';

const OverviewRow = ({id, title, number}) => {
    return (
        <React.Fragment>
            <tr className='tableRowSpacer'></tr>
            <tr>
                <td className='td-text'>{number}</td>
                <td className='td-text'>{title}</td>
                <td>
                    <Link href={`/overview/${id}`} className=''>
                        <Button className='info rightRadius'>bekijk</Button>
                    </Link>
                </td>
                    
            </tr>
        </React.Fragment>
    );
}

export default OverviewRow;