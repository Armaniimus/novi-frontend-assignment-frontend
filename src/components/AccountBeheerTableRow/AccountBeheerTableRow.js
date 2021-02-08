import React, {useState} from 'react';
import OwnApi from '../../apis/OwnApi'
import {HandleApiError} from '../../functions/HandleError';

import Button from '../Button/Button'

import RawStyles from './AccountBeheerTableRow.module.css';
import HandleModules from '../../functions/HandleModules';
const styles = new HandleModules(RawStyles);

const AccountBeheerTableRow = ({token, id, username, role, removeRow, setMessage}) => {
    const [localUsername, setLocalUsername] = useState(username);
    const [localRole, setLocalRole] = useState(role);
    const [pass, setPass] = useState('');

    const onUpdate = (id) => {
        setMessage('');
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            requestData.append('accountid', id);
            requestData.append('accountname', localUsername);
            requestData.append('password', pass);
            requestData.append('roleid', localRole);
            const response = await OwnApi.post('/accountbeheer/update', requestData);

            if (response.status === 200 && response.data.status === 'success') {
                console.log(response.data);
                setPass('');
            } else {
                if (response.data.errors !== undefined) {
                    setMessage(response.data.errors);
                }
                HandleApiError(response);
            }
        }

        request();
    }

    const onDelete = (id) => {
        setMessage('');
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            requestData.append('accountid', id);
            const response = await OwnApi.post('/accountbeheer/delete', requestData);

            if (response.status === 200 && response.data.status === 'success') {
                removeRow(id);
            } else {
                if (response.data.errors !== undefined) {
                    setMessage(response.data.errors);
                }
                HandleApiError(response);
            }
        }

        request();
    }

    return (
        <React.Fragment>
            <tr>{/*odds are spacers defined by table comp*/}</tr> 
            <tr className={RawStyles.tableRow}>
                <td>
                    <input className={styles.get('inputAdminBeheer username leftradius')} value={localUsername} onChange={ e => {setLocalUsername(e.target.value) }}/>
                </td>
                <td>
                    <input className={styles.get('inputAdminBeheer pass')} value={pass} onChange={ e => {setPass(e.target.value) }}/>
                </td>
                <td>
                    <input className={styles.get('inputAdminBeheer role')} value={localRole} onChange={ e => {setLocalRole(e.target.value) }} type='number' min='1' max='2' step='1'/>
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