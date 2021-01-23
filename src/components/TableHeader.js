import React from 'react';

const TableHeader = ({titles, colSpan}) => {
    const renderedItems = [];
    for(let i=0; i<titles.length; i++) {
        let currentColSpan = 1;
        const currentTitle = titles[i];
        
        if (colSpan !== undefined && colSpan[i] !== undefined) {
            currentColSpan = colSpan[i];   
        }
        renderedItems.push( <th key={i + currentTitle} colSpan={currentColSpan}>{currentTitle}</th> );
    }

    return (
        <thead>
            <tr>
                {renderedItems}
            </tr>
        </thead>
    );
}

export default TableHeader;