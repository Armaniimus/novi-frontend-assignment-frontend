import React, { useState, useEffect } from 'react';
import OwnApi from '../apis/OwnApi';
import {HandleApiError} from '../functions/HandleError';
import '../css/liedBeheer.css';

import Breadcrumb from '../components/Breadcrumb';
import TableHeader from '../components/TableHeader';
import LiedBeheerTableRow from '../components/LiedBeheerTableRow';
import LiedBeheerTableRowCreate from '../components/LiedBeheerTableRowCreate';

const breadcrumbData = [
    {
        name: 'Lied Beheer',
        link: ''
    }
];


const LiedBeheer = ({token}) => {
    const tableHeader = <TableHeader titles={['Number', 'Title', 'Actions']} colSpan={[1,1,3]}/>;
    const [renderedData, setRenderedData] = useState( <div>Loading...</div>);
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
                <table id='liedTable'>
                    {tableHeader}
                    <tbody>
                        {tableBody}
                        <LiedBeheerTableRowCreate token={token} addRow={addRow}/>
                    </tbody>
                </table>
                <p>* if no password is given the password will not be changed</p>
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
                    <div className='hor-center flexparent'>
                        <div className='flex-block'>
                            <Breadcrumb data={breadcrumbData} className='breadCrumbItem'/>
                        </div>
                    </div>

                    {/* content */}
                    {renderedData}
                </div>
            </div>
        </React.Fragment>
    );
}

export default LiedBeheer;