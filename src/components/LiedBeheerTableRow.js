import React, {useState} from 'react';
import OwnApi from '../apis/OwnApi'
import {HandleApiError} from '../functions/HandleError';
import '../css/accountBeheerTableRow.css';


import Button from './Button'


const LiedBeheerTableRow = ({token, id, username, role, removeRow}) => {
    const [localUsername, setLocalUsername] = useState(username);
    const [localRole, setLocalRole] = useState(role);
    const [pass, setPass] = useState();

    const onUpdate = (id) => {
        const request = async () => {
            let requestData = new URLSearchParams();
            // requestData.append('token', token);
            // requestData.append('accountid', id);
            // requestData.append('accountname', localUsername);
            // requestData.append('password', pass);
            // requestData.append('roleid', localRole);
            const response = await OwnApi.post('/liedbeheer/update', requestData);

            if (response.status === 200 && response.data.status === 'success') {
                console.log(response.data);
            } else {
                HandleApiError(response);
            }
        }

        request();

        console.log(id);
    }

    const onDelete = (id) => {
        const request = async () => {
            let requestData = new URLSearchParams();
            // requestData.append('token', token);
            // requestData.append('accountid', id);
            const response = await OwnApi.post('/liedbeheer/delete', requestData);

            if (response.status === 200 && response.data.status === 'success') {
                removeRow(id);
            } else {
                HandleApiError(response);
            }
        }

        request();

        console.log(id);
    }

    const onEdit = (id) => {
        // const request = async () => {
        //     let requestData = new URLSearchParams();
        //     // requestData.append('token', token);
        //     // requestData.append('accountid', id);
        //     const response = await OwnApi.post('/liedbeheer/delete', requestData);

        //     if (response.status === 200 && response.data.status === 'success') {
        //         removeRow(id);
        //     } else {
        //         HandleApiError(response);
        //     }
        // }

        // request();

        console.log(id);
    }

    return (
        <React.Fragment>
            <tr className='tableRowSpacer'></tr>
            <tr className='tableRow'>
                <td>
                    <input className='inputLiedBeheer username leftradius' value={localUsername} onChange={ e => {setLocalUsername(e.target.value) }}/>
                </td>
                <td>
                    <input className='inputLiedBeheer pass' value={pass} onChange={ e => {setPass(e.target.value) }}/>
                </td>
                <td>
                    <input className='inputLiedBeheer role' value={localRole} onChange={ e => {setLocalRole(e.target.value) }}/>
                </td>
                <td>
                    <Button className='info noRadius' callback={() => {onEdit(id)}}>Edit Song</Button>
                </td>
                <td>
                    <Button className='warning noRadius' callback={() => {onUpdate(id)}}>Update</Button>
                </td>
                <td>
                    <Button className='danger rightRadius' callback={() => {onDelete(id)}}>Delete</Button>
                </td>
            </tr>
        </React.Fragment>
    );
}

export default AccountBeheerTableRow;