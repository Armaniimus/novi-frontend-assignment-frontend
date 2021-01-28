import React, {useEffect, useState} from 'react';
import OwnApi from '../apis/OwnApi';
import {HandleApiError} from '../functions/HandleError';

import Breadcrumb from '../components/Breadcrumb';
import Table from '../components/Table';
import OverviewRow from '../components/OverviewRow';

const breadcrumbData = [
    {
        name: 'Overview',
        link: ''
    },
]

const Overview = ({token}) => {
    const [data, setData] = useState({});
    const [renderedData, setRenderedData] = useState(null);

    useEffect( () => {
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            const response = await OwnApi.post('/overview', requestData);

            if (response.status === 200 && response.data.status === 'success') {
                setData(response.data);
            } else {
                HandleApiError(response);
            }
        }

        request();
    }, [setData, token]);

    useEffect( () => {        
        if (data.status === 'success') {   
            if (data.songInfo !== undefined) {
                const renderedRows = data.songInfo.map( ({id, title, number}) => {
                    return <OverviewRow key={id} id={id} title={title} number={number}/>
                });
                setRenderedData( renderedRows );
            } else {
                console.error('incorectdata gained', data);
            }
        }
    }, [data]);

    return (
        <React.Fragment>
            <div className='hor-center flexparent'>
                <div className='flex-block'>
                    <Breadcrumb data={breadcrumbData} className='breadCrumbItem'/>

                    <Table titles={['Number', 'Title', '']} colspan={[1,1,1]}>{renderedData}</Table>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Overview;