import React from 'react';
import TableHeader from '../components/TableHeader';
import '../css/table.css';

const Table = ({titles, colSpans, className, children}) => {
    if (className == undefined) {
        className = 'table';
    } else {
        className += ' table'; 
    }

    return(
        <table className={className}>
            <TableHeader titles={titles} colSpans={colSpans}/>
            <tbody className='tbody'>
                {children}
            </tbody>
        </table>
    ); 
}

export default Table;