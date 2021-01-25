import React, {useState} from 'react';
import OwnApi from '../apis/OwnApi'
import '../css/accountBeheerTableRow.css';
import {HandleApiError} from '../functions/HandleError';

import Button from './Button'


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
            <tr className='tableRowSpacer'></tr>
            <tr className='tableRow'>
                <td>
                    <input className='inputLiedBeheer song-number leftradius'placeholder='Song number'  value={number} onChange={ e => {setNumber(e.target.value) }} type='number' step='1'/>
                </td>
                <td>
                    <input className='inputLiedBeheer song-title' placeholder='Song name' value={title} onChange={ e => {setTitle(e.target.value) }} type='text'/>
                </td>
                <td>
                    <Button className='success rightRadius' callback={() => {onCreate()}}>Create</Button>
                </td>
            </tr>
        </React.Fragment>
    );
}

export default LiedBeheerTableRow;