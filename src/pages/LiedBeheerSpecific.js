import React, {useEffect, useState} from 'react';
import OwnApi from '../apis/OwnApi';
import {HandleApiError} from '../functions/HandleError';

import Breadcrumb from '../components/Breadcrumb';

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

const LiedBeheerSpecific = ({urlVars, token}) => {
    const [data, setData] = useState({});
    const [renderedData, setRenderedData] = useState(null);

    useEffect( () => {
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            const response = await OwnApi.post(`/overview/${urlVars.id}`, requestData);

            if (response.status === 200 && response.data.status === 'success') {
                setData(response.data);
            } else {
                HandleApiError(response);
            }
        }
        if (urlVars !== undefined && urlVars.id !== undefined) {
            request();
        } else {
            console.log('', urlVars);
        }
    }, [setData, token, urlVars]);

    useEffect( () => {
        if (data.status === 'success') {
            if (data.songInfo !== undefined) {
                setRenderedData(
                    <React.Fragment>
                        <div>{data.songInfo.id}</div>
                        <div>{data.songInfo.number}</div>
                        <div>{data.songInfo.title}</div>
                        <div>{data.songInfo.songText}</div>
                    </React.Fragment>
                );
            } else {
                console.error('songinfo undefined', data);
            }
        }
    }, [data, setRenderedData]);

    return (
        <React.Fragment>
            <div className='hor-center flexparent'>
                <div className='flex-block'>
                    <Breadcrumb data={breadcrumbData} className='breadCrumbItem'/>

                    {renderedData}
                </div>
            </div>
        </React.Fragment>
    );
}

export default LiedBeheerSpecific;