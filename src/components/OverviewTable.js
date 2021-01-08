import React from 'react';
import OverviewRow from './OverviewRow';
import OverviewHeader from './OverviewHeader';

const OverviewTable = ({data}) => {
    const renderedRows = data.map( ({id, title, number}) => {
        return <OverviewRow key={id} id={id} title={title} number={number}/>
    });

    return (
        <React.Fragment>
            <table>
                <OverviewHeader />
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default OverviewTable;