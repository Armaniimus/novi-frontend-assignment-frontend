import React, { useState, useEffect } from 'react';
import OwnApi from '../apis/OwnApi';
import {HandleApiError} from '../functions/HandleError';
import Globals from '../functions/Globals';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import LiedBeheerTableRow from '../components/LiedBeheerTableRow/LiedBeheerTableRow';
import LiedBeheerTableRowCreate from '../components/LiedBeheerTableRowCreate/LiedBeheerTableRowCreate';
import Table from '../components/Table/Table';
import MessageBox from '../components/MessageBox/MessageBox';

const breadcrumbData = [
    {
        name: 'Lied Beheer',
        link: ''
    }
];


const LiedBeheer = () => {
    const token = Globals.getToken();

    const [renderedData, setRenderedData] = useState(null);
    const [tableBody, setTableBody] = useState({});
    const [message, setMessage] = useState('');

    const request = async () => {
        let requestData = new URLSearchParams();
        requestData.append('token', token);
        const response = await OwnApi.post('/liedbeheer', requestData);

        if (response.status === 200 && response.data.status === 'success') {
            if (response.data.songInfo !== undefined) {
                console.log('sucess', response.data.songInfo);

                const newTableBody = response.data.songInfo.map( ({id, number, title}) => {
                    return (
                        <LiedBeheerTableRow key={id} token={token} id={id} number={number} title={title} removeRow={removeRow} setMessage={setMessage}/>
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
                    <LiedBeheerTableRowCreate token={token} addRow={addRow} setMessage={setMessage}/>
                </React.Fragment>
            );
        }
    }

    useEffect( () => {
        console.log(message);
    }, [message])

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

                    <MessageBox>{message}</MessageBox>
                    {/* content */}
                    <Table titles={['Nummer', 'Titel', 'Acties']} colSpans={[1,1,3]}>
                        {renderedData}
                    </Table>                    
                </div>
            </div>
        </React.Fragment>
    );
}

export default LiedBeheer;