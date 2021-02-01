import React, {useState, useEffect} from 'react';
import OwnApi from '../apis/OwnApi';
import {HandleApiError} from '../functions/HandleError';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import AccountBeheerTableRow from '../components/AccountBeheerTableRow/AccountBeheerTableRow';
import AccountBeheerTableRowCreate from '../components/AccountBeheerTableRowCreate/AccountBeheerTableRowCreate';
import Table from '../components/Table/Table';


const breadcrumbData = [
    {
        name: 'Account Beheer',
        link: ''
    }
];

const AccountBeheer = ({token}) => {
    // const tableHeader = <TableHeader />;
    
    const [renderedData, setRenderedData] = useState(null);
    const [tableBody, setTableBody] = useState({});

    const request = async () => {
        let requestData = new URLSearchParams();
        requestData.append('token', token);
        const response = await OwnApi.post('/accountbeheer', requestData);

        if (response.status === 200 && response.data.status === 'success') {
            console.log('index success', response.data);

            if (response.data['accountInfo'] !== undefined) {
                const newTableBody = response.data['accountInfo'].map( ({id, name, role_id}) => {
                    return (
                        <AccountBeheerTableRow key={id} token={token} id={id} username={name} role={role_id} removeRow={removeRow}/>
                    );
                })
                setTableBody(newTableBody);
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
                    <AccountBeheerTableRowCreate token={token} addRow={addRow}/>
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
                    
                    <Table titles={['Username', 'New-password*', 'Role', 'Actions']} colSpans={[1,1,1,2]}>
                        {renderedData}
                    </Table>
                    <p>* if no password is given the password will not be changed</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AccountBeheer;