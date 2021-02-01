import React, {useState} from 'react';
import OwnApi from '../../apis/OwnApi'
import {HandleApiError} from '../../functions/HandleError';

import Button from '../Button/Button'

import RawStyles from '../AccountBeheerTableRow/AccountBeheerTableRow.module.css';
import HandleModules from '../../functions/HandleModules';
const styles = new HandleModules(RawStyles);

const AccountBeheerTableRow = ({token, addRow}) => {
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');

    const onCreate = () => {
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            requestData.append('accountname', username);
            requestData.append('password', password);
            requestData.append('roleid', role);
            const response = await OwnApi.post('/accountbeheer/create', requestData);

            if (response.status === 200 && response.data.status === 'success') {
                const accountInfo = response.data['accountInfo'];

                addRow( accountInfo.id, accountInfo.name, accountInfo.role_id );
                setUsername('');
                setPassword('');
                setRole('');
            } else {
                HandleApiError(response);
            }
        }

        request();
    }

    return (
        <React.Fragment>
            <tr className={RawStyles.tableRowSpacer}></tr>
            <tr className={RawStyles.tableRow}>
                <td>
                    <input className={styles.get('inputAdminBeheer username leftradius')} placeholder='Username'  value={username} onChange={ e => {setUsername(e.target.value) }} type='text'/>
                </td>
                <td>
                    <input className={styles.get('inputAdminBeheer pass')} placeholder='Password' value={password} onChange={ e => {setPassword(e.target.value) }} type='text'/>
                </td>
                <td>
                    <input className={styles.get('inputAdminBeheer role')} placeholder='Role'  value={role} onChange={ e => {setRole(e.target.value) }} type='number' step='1'/>
                </td>
                <td>
                    <Button className='success rightRadius' callback={() => {onCreate()}}>Create</Button>
                </td>
            </tr>
        </React.Fragment>
    );
}

export default AccountBeheerTableRow;