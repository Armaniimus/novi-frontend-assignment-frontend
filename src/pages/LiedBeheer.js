import React, { useState, useEffect } from 'react';
import OwnApi from '../apis/OwnApi';
import {HandleApiError} from '../functions/HandleError';

import Breadcrumb from '../components/Breadcrumb';
import LiedBeheerTableRow from '../components/LiedBeheerTableRow';
import LiedBeheerTableRowCreate from '../components/LiedBeheerTableRowCreate';
import Table from '../components/Table';

const breadcrumbData = [
    {
        name: 'Lied Beheer',
        link: ''
    }
];


const LiedBeheer = ({token}) => {
    const [renderedData, setRenderedData] = useState(null);
    const [tableBody, setTableBody] = useState({});

    const request = async () => {
        let requestData = new URLSearchParams();
        requestData.append('token', token);
        const response = await OwnApi.post('/liedbeheer', requestData);

        if (response.status === 200 && response.data.status === 'success') {
            if (response.data.songInfo !== undefined) {
                // setData(response.data);
                console.log('sucess', response.data.songInfo);

                const newTableBody = response.data.songInfo.map( ({id, number, title}) => {
                    return (
                        <LiedBeheerTableRow key={id} token={token} id={id} number={number} title={title} removeRow={removeRow}/>
                    );
                })
                setTableBody(newTableBody);
            } else {
                console.log(response.data);
            }
            
        } else {
            HandleApiError(response);
        }
    }

    const addRow = () => {
        request();
    }

    const removeRow = () => {
        request();
    }

    const renderData = () => {
        if (tableBody[0] !== undefined) {
            setRenderedData(
                <React.Fragment>
                    {tableBody}
                    <LiedBeheerTableRowCreate token={token} addRow={addRow}/>
                </React.Fragment>
            );
        }
    }

    useEffect( () => {
        request();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect( () => {
        renderData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableBody]);


    return (
        <React.Fragment>
            <div className='hor-center flexparent'>
                <div className='flex-block'>
                    <Breadcrumb data={breadcrumbData} className='breadCrumbItem'/>

                    {/* content */}
                    <Table titles={['Number', 'Title', 'Actions']} colSpans={[1,1,3]}>
                        {renderedData}
                    </Table>                    
                </div>
            </div>
        </React.Fragment>
    );
}

export default LiedBeheer;