import React, {useEffect, useState} from 'react';
import OwnApi from '../apis/OwnApi';
import {HandleApiError} from '../functions/HandleError';

import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import '../css/liedBeheerSpecific.css';

const breadcrumbData = [
    {
        name: 'Liedbeheer',
        link: '/liedbeheer'
    }, 
    {
        name: 'item',
        link: ''
    }
];

const onUpdate = (token, id, songtext) => {
    console.log('update', id);

    const request = async () => {
        let requestData = new URLSearchParams();
        requestData.append('token', token);
        requestData.append('songid', id);
        requestData.append('songtext', songtext);
        const response = await OwnApi.post('/liedbeheer/update/songtext', requestData);

        if (response.status === 200 && response.data.status === 'success') {
            console.log(response.data);
        } else {
            HandleApiError(response);
        }
    }

    request();
}

const LiedBeheerSpecific = ({urlVars, token}) => {
    const [songId, setSongId] = useState('');
    const [songNumber, setSongNumber] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [songText, setSongText] = useState('');

    useEffect( () => {
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            const response = await OwnApi.post(`/overview/${urlVars.id}`, requestData);

            if (response.status === 200 && response.data.status === 'success' && response.data.songInfo !== undefined) {                
                const info = response.data.songInfo;
                setSongId(info.id);
                setSongNumber(info.number);
                setSongTitle(info.title);
                setSongText(info.songText);

            } else {
                HandleApiError(response);
            }
        }
        if (urlVars !== undefined && urlVars.id !== undefined) {
            request();
        } else {
            console.log('', urlVars);
        }
    }, [token, urlVars]);

    return (
        <React.Fragment>
            <div className='hor-center flexparent'>
                <div className='flex-block'>
                    <Breadcrumb data={breadcrumbData} className='breadCrumbItem'/>

                    <div className='edit-container'>
                        <div className='blue-bar'>
                            <span>Number: {songNumber}</span>
                        </div>
                        <h2 className='edit-title'>{songTitle}</h2>
                        <div className='song-input'>
                            <textarea 
                                type='text' 
                                onChange={ 
                                    e => {
                                        setSongText(e.target.value) 
                                        console.log(e.target.value);
                                    }
                                }
                                value={songText}
                            />
                        </div>
                    </div>    
                    <Button className='info' callback={() => {onUpdate(token, songId, songText)}}>Update songtext</Button>               


                </div>
            </div>
        </React.Fragment>
    );
}

export default LiedBeheerSpecific;