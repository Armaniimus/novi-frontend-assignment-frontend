import React from 'react';
import Link from '../Link/Link';
import Button from '../Button/Button';

import RawStyles from './OverviewRow.module.css';
import Globals from '../../functions/Globals';
const pageCons = Globals.pageConst;

const OverviewRow = ({id, title, number}) => {
    return (
        <React.Fragment>
            <tr>{/*odds are spacers defined by table comp*/}</tr> 
            <tr>
                <td className={RawStyles['td-text']}>{number}</td>
                <td className={RawStyles['td-text']}>{title}</td>
                <td>
                    <Link href={`${pageCons}/overview/${id}`} className=''>
                        <Button className='info rightRadius'>Bekijk</Button>
                    </Link>
                </td>  
            </tr>
        </React.Fragment>
    );
}

export default OverviewRow;