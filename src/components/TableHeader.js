import React from 'react';
import '../css/tableHeader.css';

const TableHeader = ({titles, colSpans}) => {
    const renderedItems = [];
    for(let i=0; i<titles.length; i++) {
        let currentColSpan = 1;
        const currentTitle = titles[i];
        
        if (colSpans !== undefined && colSpans[i] !== undefined) {
            currentColSpan = colSpans[i];   
        }
        renderedItems.push( <th key={i + currentTitle} colSpan={currentColSpan}>{currentTitle}</th> );
    }

    return (
        <thead className='thead'>
            <tr>
                {renderedItems}
            </tr>
        </thead>
    );
}

export default TableHeader;