import React, {useEffect, useState} from 'react';
import OwnApi from '../apis/OwnApi';
import {HandleApiError} from '../functions/HandleError';
import Globals from '../functions/Globals';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import BlueBar from '../components/BlueBar/BlueBar';
import '../css/liedBeheerSpecific.css';

const breadcrumbData = [
    {
        name: 'Overzicht',
        link: '/overview'
    }, 
    {
        name: 'Liedtekst-pagina',
        link: ''
    }
];

const OverviewSpecific = () => {
    const token = Globals.getToken();
    const urlVars = Globals.getUrlVars();

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
                setSongNumber(info.number);
                setSongTitle(info.title);
                setSongText(info.songText);
            } else {
                HandleApiError(response);
            }
        }
        if (urlVars.id !== undefined) {
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
                        <BlueBar>Nummer: {songNumber}</BlueBar>
                        <h2 className='edit-title'>{songTitle}</h2>
                        <div className='song-input'>
                            <textarea 
                                type='text' 
                                defaultValue={songText}
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OverviewSpecific;