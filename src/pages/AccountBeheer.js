import React, {useState, useEffect} from 'react';
import OwnApi from '../apis/OwnApi';
import {HandleApiError} from '../functions/HandleError';
import '../css/accountBeheer.css';

import Breadcrumb from '../components/Breadcrumb';
import TableHeader from '../components/TableHeader';
import AccountBeheerTableRow from '../components/AccountBeheerTableRow';
import AccountBeheerTableRowCreate from '../components/AccountBeheerTableRowCreate';


const breadcrumbData = [
    {
        name: 'Account Beheer',
        link: ''
    }
];

const AccountBeheer = ({token}) => {
    const tableHeader = <TableHeader titles={['Username', 'New-password*', 'Role', 'Actions']} colSpan={[1,1,1,2]}/>;
    
    const [renderedData, setRenderedData] = useState( <div>Loading...</div>);
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

    const addRow = (id, username, role_id) => {
        // console.log('beforeAdd', tableBody);

        // const newData = tableBody;
        // newData.push(<AccountBeheerTableRow key={id} token={token} id={id} username={username} role={role_id} />);
        
        // setTableBody(newData);
        // console.log('afterAdd', tableBody);
        // renderData();        

        request();
    }

    const removeRow = (id) => {
        // console.log('beforeRemove', tableBody);

        // id = Math.floor(id);
        // const newData = tableBody;
        // for (let i=0; i<newData.length; i++) {
        //     if ( Math.floor(newData[i].key) === id) {
        //         newData.splice(i, 1);
        //         break;
        //     } else {
        //         console.log(newData[i].key, id);
        //     }
        // }
        
        // setTableBody(newData);
        // console.log('afterRemove', tableBody);
        // renderData();

        request();
    }

    const renderData = () => {
        if (tableBody[0] !== undefined) {
            setRenderedData(
                <React.Fragment>
                <table id='accountTable'>
                    {tableHeader}
                    <tbody>
                        {tableBody}
                        <AccountBeheerTableRowCreate token={token} addRow={addRow}/>
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

export default AccountBeheer;