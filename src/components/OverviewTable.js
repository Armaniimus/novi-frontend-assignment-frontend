import React from 'react';
import OverviewRow from './OverviewRow';
import TableHeader from './TableHeader';

const OverviewTable = ({data}) => {
    const renderedRows = data.map( ({id, title, number}) => {
        return <OverviewRow key={id} id={id} title={title} number={number}/>
    });

    return (
        <React.Fragment>
            <table>
                <TableHeader titles={['Number', 'Title']}/>
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default OverviewTable;