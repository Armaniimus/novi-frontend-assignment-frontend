import React, {useState} from 'react';
import OwnApi from '../../apis/OwnApi'
import {HandleApiError} from '../../functions/HandleError';
import Globals from '../../functions/Globals';

import Button from '../Button/Button'
import Link from '../Link/Link';

import RawStyles from './LiedBeheerTableRow.module.css';
import HandleModules from '../../functions/HandleModules';
const styles = new HandleModules(RawStyles);
const pageConst = Globals.pageConst;

const LiedBeheerTableRow = ({token, id, number, title, removeRow, setMessage}) => {
    const [localNumber, setLocalNumber] = useState(number);
    const [localTitle, setLocalTitle] = useState(title);

    const onUpdate = (id) => {
        const request = async () => {
            setMessage('');
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            requestData.append('number', localNumber);
            requestData.append('title', localTitle);
            requestData.append('songid', id);
            const response = await OwnApi.post('/liedbeheer/update', requestData);

            if (response.status === 200 && response.data.status === 'success') {
                console.log(response.data);
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
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            requestData.append('songid', id);
            const response = await OwnApi.post('/liedbeheer/delete', requestData);

            if (response.status === 200 && response.data.status === 'success') {
                console.log(response.data);

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
                    <input className={styles.get('inputLiedBeheer song-number leftradius')} value={localNumber} onChange={ e => {setLocalNumber(e.target.value) }} type='number'/>
                </td>
                <td>
                    <input className={styles.get('inputLiedBeheer song-title')} value={localTitle} onChange={ e => {setLocalTitle(e.target.value) }} type='text'/>
                </td>
                <td>
                    <Link href={`${pageConst}/liedbeheer/${id}`} className=''>
                        <Button className='info noRadius' >Bewerk liedtekst</Button>
                    </Link>
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

export default LiedBeheerTableRow;