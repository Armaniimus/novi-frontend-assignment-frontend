import React, {useState} from 'react';
import OwnApi from '../../apis/OwnApi'
import {HandleApiError} from '../../functions/HandleError';

import Button from '../Button/Button'

import RawStyles from '../LiedBeheerTableRow/LiedBeheerTableRow.module.css';
import HandleModules from '../../functions/HandleModules';
const styles = new HandleModules(RawStyles);

const LiedBeheerTableRow = ({token, addRow}) => {
    const [number, setNumber] = useState('');
    const [title, setTitle] = useState('');

    const onCreate = () => {
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            requestData.append('number', number);
            requestData.append('title', title);
            const response = await OwnApi.post('/liedbeheer/create', requestData);

            if (response.status === 200 && response.data.status === 'success') {
                console.log(response.data);

                addRow();
                setNumber('');
                setTitle('');

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
                    <input className={styles.get('inputLiedBeheer song-number leftradius')} placeholder='Lied nummer'  value={number} onChange={ e => {setNumber(e.target.value) }} type='number' step='1'/>
                </td>
                <td>
                    <input className={styles.get('inputLiedBeheer song-title')} placeholder='Lied titel' value={title} onChange={ e => {setTitle(e.target.value) }} type='text'/>
                </td>
                <td>
                    <Button className='success rightRadius' callback={() => {onCreate()}}>Creëer</Button>
                </td>
            </tr>
        </React.Fragment>
    );
}

export default LiedBeheerTableRow;