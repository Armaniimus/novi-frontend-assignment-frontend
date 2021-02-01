import React from 'react';
import TableHeader from '../TableHeader/TableHeader';

import RawStyles from './Table.module.css';

const Table = ({titles, colSpans, className, children}) => {
    if (className === undefined) {
        className = 'table';
    } else {
        className += ' table'; 
    }

    if (children === null) {
        return <div>Loading ...</div>;
    }

    return(
        <table className={RawStyles.table}>
            <TableHeader titles={titles} colSpans={colSpans}/>
            <tbody className={RawStyles.tbody}>{children}</tbody>
        </table>
    ); 
}

export default Table;